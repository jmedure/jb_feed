import dayjs from "dayjs"
import React from "react"
import Head from "next/head"
import Image from "next/image"
import rehypeSlug from "rehype-slug"
import { MDXRemote } from "next-mdx-remote"
import rehypeHighlight from "rehype-highlight"
import rehypeCodeTitles from "rehype-code-titles"
import { serialize } from "next-mdx-remote/serialize"
import { getSlug, getArticleFromSlug } from '../../src/utils/mdx_med'
// import "highlight.js/styles/atom-one-dark-reasonable.css"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import MHeader from "../../components/MHeader"
import Breadcrumbs from "nextjs-breadcrumbs"
import Button from "../../components/Button"
import BlogEntry from "../../components/BlogEntry"
import HeadSeo from "../../components/HeadSEO"

export default function BlogPost({ post: { source, frontmatter } }) {
  const image = frontmatter.image;
  const description = frontmatter.description;
  return (
    <React.Fragment>
      <HeadSeo
        title={(frontmatter.title) + "| Meditations by Jacob&#39;s Blue"}
        description={frontmatter.description}
        canonical={frontmatter.slug}
        image={frontmatter.image}
      />
      <MHeader/>
      <div className="container-blog my-6 md:py-8 mb-16 selection:bg-orange-100  ">
        <div className="not-prose flex-block space-y-6">
        { image ?    
          <div className="relative w-full aspect-square sm:aspect-video mb-8">
                <Image 
                  src={frontmatter.image}
                  alt={frontmatter.alt}
                  layout="fill"
                  objectFit="cover"
                  // placeholder="blur"
                  blurDataURL='https://jacobs.blue'
                />
          </div>
            :
          null
          }
            <div className="space-y-6">
                
              <h1 className="font-fruit text-5xl md:text-8xl font-bold uppercase tracking-tighter">{frontmatter.title}</h1>
              {/* { description ? 
                <p className="text-2xl font-sans tracking-wide text-neutral-600">{frontmatter.description}</p>
                :
                null
              } */}
              <div className="flex  md:flex md:flex-nowrap items-center uppercase space-x-4 text-xs text-neutral-500 font-mono not-prose md:space-y-0 ">
                  {/* <p className="">---</p> */}
                  <p className="items-center px-3 py-1 text-left flex-nowrap border-solid border rounded-full text-black uppercase border-black">{frontmatter.readingTime}</p>
                  <p className="px-3 py-1 rounded-full bg-neutral-200/70 border border-solid border-neutral-200 text-neutral-600">Last edited {dayjs(frontmatter.lastEdited).format("MMM D, YYYY")}</p>
                </div>
            </div>
        </div>
        <article className="content prose-p:font-mono md:prose-base prose-base prose:lead-loose prose-a:text-blue-400 prose-a:underline-offset-2 prose-a:decoration-blue-400  hover:prose-a:bg-blue-50 hover:prose-a:text-blue-500 prose-blockquote:text-xl prose-blockquote:tracking-tight prose-blockquote:font-fruit prose:tracking-tight prose-a:blue-500  prose:neutral prose-headings:tracking-tighter prose-headings:font-mono prose-headings:uppercase prose-blockquote:border-l-2 prose-blockquote:border-neutral-300 prose-blockquote:pl-6  prose-blockquote:leading-normal">
          <MDXRemote {...source} components={{ Image, Button, BlogEntry }} />
        </article>
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  };
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}