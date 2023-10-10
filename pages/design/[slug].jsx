import dayjs from 'dayjs';
import React from 'react';
import Image from 'next/image';
import rehypeSlug from 'rehype-slug';
import { MDXRemote } from 'next-mdx-remote';
// import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import { serialize } from 'next-mdx-remote/serialize';
import { getSlug, getArticleFromSlug } from '../../src/utils/mdx_design';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Button from '../../components/Button';
import BlogEntry from '../../components/BlogEntry';
import MHeaderRound from '../../components/MHeaderRound';
import OneBlank from '../../components/OneBlank';
import BlogSEO from '../../components/BlogSEO';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import Link from 'next/link';

export default function BlogPost({ post: { source, frontmatter } }) {
  const image = frontmatter.image;
  const youtube = frontmatter.youtube;
  const description = frontmatter.description;
  return (
    <React.Fragment>
      <BlogSEO
        title={frontmatter.title + " from /design by Jacob's Blue"}
        description={description}
        canonical={frontmatter.slug}
        image={frontmatter.thumbnail}
      />
      {/* <MHeaderRound title={frontmatter.title} rt={frontmatter.readingTime} /> */}
      <div className="selection:bg-yellow-200 scroll-smooth ">
        <div className="flex sticky top-0 p-8 z-40  bg-gradient-to-t from-white/0 backdrop-blur-[1px] to-white align-middle justify-center transition-all hover:text-blue-500">
          <Link href="/" passHref>
            <div className="flex col-span-1 py-2 justify-end space-x-1 items-center hover:drop-shadow-xl transition-all duration-200 cursor-pointer">
              {/* <div className="border-white border-2 rounded-full relative p-5 cursor-pointer">
                <Image alt="blue gradient" src="/logo.png" sizes="100" fill />
              </div> */}
            </div>
          </Link>
          <Link
            href="/design"
            className="flex p-2 align-middle justify-center relative -bottom-16 -left-[480px]  no-underline group items-center space-x-1 transition-all"
            legacyBehavior
          >
            <span className="material-icons text-base group-hover:-translate-x-1 transition-all">
              arrow_west
            </span>
            <p className="text-sm">Design writings</p>
          </Link>
        </div>

        <div className="not-prose flex-block container-blog">
          {/* {image ? (
            <div className="relative w-full aspect-square sm:aspect-video mb-8">
              <Image
                src={frontmatter.image}
                alt={frontmatter.alt}
                placeholder="blur"
                blurDataURL="https://jacobs.blue"
                fill
                sizes="100vw"
              />
            </div>
          ) : null} */}
          {/* {youtube ? (
            <div className="lg:w-[80%] my-8 container-blog relative h-full aspect-square rounded-3xl overflow-hidden sm:aspect-video">
              <YoutubeEmbed embedId={frontmatter.youtube} />
            </div>
          ) : null} */}
          <div className="flex-col space-y-2 ">
            <h1 className="font-mont text-base tracking-normal font-normal ">
              {frontmatter.title}
            </h1>
            <div className="flex space-x-1 text-sm font-mont text-neutral-400">
              <p className="text-neutral-600">{frontmatter.readingTime}</p>
              <p className="font-sans">•</p>
              <p className="">
                Last edited{' '}
                {dayjs(frontmatter.lastEdited).format('MMM D, YYYY')}
              </p>
            </div>

            {/* {frontmatter.productionLink && frontmatter.repoLink ? (
              <div className="flex flex-col space-y-2 text-sm font-mont text-neutral-400 py-1">
                <div className="flex space-x-2 text-sm font-mont font-light text-neutral-400 items-center">
                  <Link
                    href={frontmatter.productionLink}
                    className="flex items-center text-blue-500 bg-blue-50 border-blue-100 border hover:bg-blue-100 no-underline px-2 py-[.5px] transition-colors rounded-full"
                  >
                    Production
                    <span className="material-icons text-sm">north_east</span>
                  </Link>
                  <Link
                    href={frontmatter.repoLink}
                    className="flex items-center text-blue-500 bg-blue-50 border-blue-100 border hover:bg-blue-100 no-underline px-2 py-[.5px] transition-colors rounded-full"
                  >
                    Github Repo
                    <span className="material-icons text-sm">north_east</span>
                  </Link>
                </div> */}
            {/* <div className="flex space-x-8 text-sm font-mont text-neutral-400">
                  <Link
                    href={frontmatter.repoLink}
                    className="text-blue-400 decoration-blue-100 hover:decoration-blue-400 underline-offset-2 transition-colors rounded-full"
                  >
                    Repo
                    <span className="material-icons text-xs">north_east</span>
                  </Link>
                </div> */}
            {/* </div>
            ) : null} */}
          </div>

          {/* <div className="flex md:flex md:flex-nowrap items-center space-x-4 text-[12px] md:text-sm  text-neutral-500 font-mono not-prose md:space-y-0 ">
            <p className="items-center px-3 py-1 text-left flex-nowrap border-solid border rounded-full text-neutral-900 border-neutral-900">
              {frontmatter.readingTime}
            </p>
            <p className="px-3 py-1 rounded-full border border-solid border-neutral-500 text-neutral-500">
              Last edited {dayjs(frontmatter.lastEdited).format('MMM D, YYYY')}
            </p>
          </div> */}
        </div>

        <article className="content pb-16 prose-img:pt-8 container-blog prose-base prose-p:tracking-normal prose-p:font-mont prose-neutral prose-p:font-ultralight font-text text-base text-neutral-800 prose-lead:leading-snug prose-a:text-blue-400 prose-a:underline-offset-2 prose-a:decoration-blue-400 hover:prose-a:bg-blue-50 hover:prose-a:text-blue-500 prose-blockquote:text-2xl prose-blockquote:leading-loose prose-blockquote:tracking-normal prose-blockquote:font-fruit prose:tracking-normal tracking prose-a:blue-500 prose:neutral prose-headings:tracking-tight prose-headings:py-2 prose-headings:text-base prose-headings:font-normal prose-headings:font-mont prose-blockquote:border-l-2 prose-blockquote:border-neutral-300 prose-blockquote:pl-6 prose-ul:list-disc prose-ul:font-mont prose-ul:decoration-neutral-300 ">
          <MDXRemote
            {...source}
            components={{ Image, Button, BlogEntry, OneBlank }}
          />
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
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        // rehypeHighlight,
        rehypeCodeTitles,
        rehypePrism,
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
