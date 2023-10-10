import dayjs from 'dayjs';
import React from 'react';
import Image from 'next/legacy/image';
import rehypeSlug from 'rehype-slug';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import { serialize } from 'next-mdx-remote/serialize';
import { getSlug, getArticleFromSlug } from '../../src/utils/mdx_med';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Button from '../../components/Button';
import BlogEntry from '../../components/BlogEntry';
import OneBlank from '../../components/OneBlank';
import BlogSEO from '../../components/BlogSEO';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import Link from 'next/link';
import Breadcrumbs from '@marketsystems/nextjs13-appdir-breadcrumbs';

export default function BlogPost({ post: { source, frontmatter } }) {
  const image = frontmatter.image;
  const youtube = frontmatter.youtube;
  const description = frontmatter.description;
  const toc = frontmatter.toc;
  const slug = frontmatter.slug;

  return (
    <React.Fragment>
      <BlogSEO
        title={
          frontmatter.title + " | Meditations of a Rockstar by Jacob's Blue"
        }
        description={frontmatter.description}
        canonical={frontmatter.slug}
        image={frontmatter.thumbnail}
      />
      <div className="flex flex-col w-full mx-auto">
        <div className="p-8 flex-row w-full z-20 fixed">
          <Breadcrumbs
            rootLabel="Home"
            // replaceCharacterList={[{ from: '-', to: '  ' }]}
            transformLabel={(label) => label + ' / ' + ' '}
            listClassName="flex space-x-1 capitalize"
            activeItemClassName="text-black"
            inactiveItemClassName="text-black/50 hover:decoration-black hover:text-black transition-all"
          />
          {/* <Link
            href="/meditations"
            className="flex w-36 group no-underline items-center space-x-1 transition-all"
          >
            <span className="flex justify-end w-5 text-base material-icons group-hover:-translate-x-1 transition-all">
              arrow_west
            </span>
            <p className="text-lg">All entries</p>
          </Link> */}
        </div>

        <div className="w-full fixed left-0 top-0 p-11 z-10 bg-gradient-to-t from-white/0 backdrop-blur-[1px] to-white"></div>
        <div className="flex w-full px-4 sm:px-8 mt-24 mb-12 space-x-4 max-w-7xl mx-auto">
          {/* {youtube ? (
            <div className="flex-grow w-full h-full hover:drop-shadow-lg overflow-hidden aspect-video">
              <YoutubeEmbed embedId={frontmatter.youtube} />
            </div>
          ) : null} */}
          {image ? (
            <div className="relative w-full flex aspect-video">
              <Image
                src={frontmatter.image}
                alt={frontmatter.alt}
                placeholder="blur"
                blurDataURL="https://jacobs.blue"
                objectFit="cover"
                layout="fill"
              />
            </div>
          ) : null}
        </div>
        <div className="max-w-7xl mx-auto">
          {toc.length ? (
            <div className="sticky w-24 m-8 top-24 ">
              <div className="-left-80 absolute flex flex-col">
                <div className="flex flex-col w-full no-underline">
                  {toc.map((heading, index) => {
                    const clean = heading.replace(/-/g, ' ');
                    return (
                      <Link
                        href={slug + '#' + heading}
                        key={index}
                        className="text-base py-1 no-underline capitalize text-neutral-400 hover:text-neutral-800 transition-all"
                      >
                        {clean}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
          <div className="selection:bg-yellow-200 scroll-smooth max-w-[640px] mb-80 mx-auto">
            <div className="not-prose flex-block flex space-y-2 pb-8">
              <div className="font-jb space-y-2">
                <h1 className="tracking-tight  font-medium text-2xl ">
                  {frontmatter.title}
                </h1>
                {/* {description ? (
                  <p className="text-2xl text-black/50">
                    {frontmatter.description}
                  </p>
                ) : null} */}
                <div className="flex md:flex md:flex-nowrap items-center text-base pt-1 space-x-4 text-neutral-500 font-jb tracking-tight md:space-y-0 ">
                  <p className="text-left flex-nowrap">
                    ( {frontmatter.readingTime} )
                  </p>
                  <p className="">
                    Published {dayjs(frontmatter.date).format('DD.MM.YY')}
                  </p>
                </div>
              </div>
            </div>
            <article className="content w-full prose-headings:no-underline prose-headings:text-black prose-headings:font-medium scroll-smooth prose-p:tracking-tight c prose-p:font-jb prose-2xl leading-snug prose-a:text-blue-400 prose-a:font-thin prose-a:decoration-blue-100 hover:prose-a:decoration-blue-500 prose-a:transition-all prose-a:duration-100 hover:prose-a:bg-blue-50 hover:prose-a:text-blue-500 prose-a:underline prose-a:underline-offset-2 prose prose:tracking-tighter prose-a:blue-500 prose:neutral prose-blockquote:font-fruit prose-headings:tracking-tight prose-headings:font-jb prose-headings:prose-2xl  prose-neutral prose-ul:list-disc prose-ul:leading-tight prose-ul:text-2xl prose-ul:decoration-neutral-300 prose-p:text-neutral-700">
              <MDXRemote
                {...source}
                components={{ Image, Button, BlogEntry, OneBlank }}
              />
            </article>
          </div>
        </div>
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
