import dayjs from "dayjs"
import React from "react"
import Head from "next/head"
import Image from "next/legacy/image"
import rehypeSlug from "rehype-slug"
import { MDXRemote } from "next-mdx-remote"
import rehypeHighlight from "rehype-highlight"
import rehypeCodeTitles from "rehype-code-titles"
import { serialize } from "next-mdx-remote/serialize"
import { getSlug, getArticleFromSlug } from '../../src/utils/mdx_med'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import Button from "../../components/Button"
import BlogEntry from "../../components/BlogEntry"
// import HeadSeo from "../../components/HeadSEO"
import MHeaderRound from "../../components/MHeaderRound"
import OneBlank from "../../components/OneBlank";
import BlogSEO from "../../components/BlogSEO"
import YoutubeEmbed from "../../components/YoutubeEmbed"


export default function BlogPost({ post: { source, frontmatter } }) {
  const image = frontmatter.image;
  const youtube = frontmatter.youtube;
  const description = frontmatter.description;
  return (
    <React.Fragment>
      <BlogSEO
        title={(frontmatter.title) + " | Meditations of a Rockstar by Jacob's Blue"}
        description={frontmatter.description}
        canonical={frontmatter.slug}
        image={frontmatter.thumbnail}
      />
      <MHeaderRound title={frontmatter.title} rt={frontmatter.readingTime}/>
      <div className=" mb-16 selection:bg-yellow-200 scroll-smooth ">
        <div className="not-prose flex-block space-y-6">
        { image ?    
          <div className="relative w-full aspect-square sm:aspect-video mb-8">
                <Image
                  src={frontmatter.image}
                  alt={frontmatter.alt}
                  // placeholder="blur"
                  blurDataURL='https://jacobs.blue'
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover"
                  }} />
          </div>
            :
          null
          }
        { youtube ?    
          <div className="lg:w-[80%] my-8 container-blog relative h-full aspect-square rounded-3xl overflow-hidden sm:aspect-video">
                <YoutubeEmbed
                embedId={frontmatter.youtube}
                />
          </div>
            :
          null
          }
            <div className="pb-1 sm:pb-3">
                
              <h1 className="py-6 md:py-8 lg:py-8 tracking-tighter font-fruit text-7xl leading-[.9] md:text-[8em] max-w-[90%] md:max-w-95% lg:text-[10em] xl:text-[14em] w-[640px] lg:max-w-full overflow-visible lg:w-full mx-auto lg:text-center ">{frontmatter.title}</h1>
              {/* { description ? 
                <p className="text-2xl font-sans tracking-wide text-neutral-600">{frontmatter.description}</p>
                :
                null
              } */}
              <div className="flex container-blog md:flex md:flex-nowrap items-center space-x-4 text-[12px] md:text-sm  text-neutral-500 font-mono not-prose md:space-y-0 ">
                  {/* <p className="">---</p> */}
                  <p className="items-center px-3 py-1 text-left flex-nowrap border-solid border rounded-full text-neutral-900 border-neutral-900">{frontmatter.readingTime}</p>
                  <p className="px-3 py-1 rounded-full border border-solid border-neutral-500 text-neutral-500">Last edited {dayjs(frontmatter.lastEdited).format("MMM D, YYYY")}</p>
                </div>
            </div>
        </div>
        <article className="content prose-p:tracking-tight container-blog prose-p:font-bask prose-base lg:prose-lg prose-lead:leading-loose prose-a:text-blue-400 prose-a:underline-offset-2 prose-a:decoration-blue-400 hover:prose-a:bg-blue-50 hover:prose-a:text-blue-500 prose-blockquote:text-2xl prose-blockquote:leading-relaxed prose-blockquote:tracking-tight prose-blockquote:font-fruit prose:tracking-tighter prose-a:blue-500 prose:neutral prose-headings:tracking-tighter prose-headings:font-mono prose-headings:uppercase prose-blockquote:border-l-2 prose-blockquote:border-neutral-300 prose-blockquote:pl-6 prose-ul:list-disc prose-ul:font-bask prose-ul:decoration-neutral-300">
          <MDXRemote {...source} components={{ Image, Button, BlogEntry, OneBlank }} />
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