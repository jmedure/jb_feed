import dayjs from "dayjs"
import React from "react"
import Head from "next/head"
import Image from "next/legacy/image"
import rehypeSlug from "rehype-slug"
import { MDXRemote } from "next-mdx-remote"
import rehypeHighlight from "rehype-highlight"
import rehypeCodeTitles from "rehype-code-titles"
import { serialize } from "next-mdx-remote/serialize"
import { getSlug, getPageFromSlug } from '../../src/utils/mdx_misc'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import Button from "../../components/Button"
import BlogEntry from "../../components/BlogEntry"

export default function PagePost({ post: { source, frontmatter } }) {
  
  return (
    <React.Fragment>
      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>

      {/* <JBHeader/> */}
      <div className="container prose-lg proseprose:neutral prose-headings:tracking-tighter prose-headings:font-sans prose-headings:font-medium py-20">
        <div className="not-prose flex-block font-sans border-b border-solid py-4 border-neutral-300">
            <div className="">
              {/* <Breadcrumbs useDefaultStyle omitRootLabel containerClassName="breadcrumbs" activeItemClassName="bread-crumb" /> */}
              <Button href="./" type="left" copy=" back" icon="west"/>
              <h1 className="text-5xl font-semibold font-sans tracking-tighter mb-4 mt-20">{frontmatter.title}</h1>
              <p className="text-2xl tracking-wide text-neutral-600">{frontmatter.description}</p>
            </div>
            <div className="flex justify-betwee items-center tracking-wide text-neutral-500">
              <div className="flex w-full align-middle space-x-4 not-prose my-4">
                {/* <p className="publish-date">Published {dayjs(frontmatter.date).format("MMMM D, YYYY")} &mdash;{" "}</p> */}
                <p className="">Last edited {dayjs(frontmatter.lastEdited).format("MMMM D, YYYY")}</p>
                <p>{frontmatter.readingTime}</p>
              </div>
              <div className="flex-col flex flex-shrink h-fill justify-items-end">
                      <div className="flex-row">
                          <span className="material-icons text-right h-auto text-xl border-2 px-2 text-neutral-400 border-neutral-200 border-solid hover:border-solid  hover:text-neutral-400 hover:border-2 hover:border-neutral-400 rounded-md transition-all ">ios_share</span>
                      </div>
                  </div>
            </div>
          </div>
        {/* <div className="relative w-full h-[40rem] border-solid border-neutral-300 border">
              <Image 
                src={frontmatter.image}
                alt={frontmatter.alt}
                width={500}
                height={500}
                layout="fill"
                objectFit="cover"
                // placeholder="blur"
                blurDataURL='https://jacobs.blue'
              />
        </div>  */}
        <div className="content">
          <MDXRemote {...source} components={{ Image, Button, BlogEntry }} />
        </div>
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params;
  const { content, frontmatter } = await getPageFromSlug(slug);

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