import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
import React from 'react';
import Image from 'next/legacy/image';
import rehypeSlug from 'rehype-slug';
import { MDXRemote } from 'next-mdx-remote';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
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
import ProseWrapper from '../../components/mdx/ProseWrapper';

export default function BlogPost({ post: { source, frontmatter } }) {
  const image = frontmatter.image;
  const youtube = frontmatter.youtube;
  const toc = frontmatter.toc;
  const slug = frontmatter.slug;

  return (
    <React.Fragment>
      <BlogSEO
        title={frontmatter.title + " | Jacob's Blue"}
        description={frontmatter.description}
        canonical={frontmatter.slug}
        image={frontmatter.thumbnail}
      />
      <div className="flex flex-col w-full mx-auto">
        <div className="flex pt-8 px-8 pb-6 flex-row w-full z-20 items-center space-x-1">
          <Link
            href="/"
            passHref
            className="flex items-center hover:drop-shadow-lg border-white border-2 rounded-full transition-all duration-200 cursor-pointer"
          >
            <Image
              alt="blue gradient"
              src="/logo.png"
              width={32}
              height={32}
              priority
            />
          </Link>
          <Breadcrumbs
            // replaceCharacterList={[{ from: '-', to: '  ' }]}
            omitRootLabel
            transformLabel={(label) => ' / ' + label + ' '}
            listClassName="flex space-x-1 capitalize font-jbd font-normal tracking-tight"
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

        <div className="w-full fixed left-0 top-0 p-10 z-10 bg-gradient-to-t from-white/0 backdrop-blur-[1px] to-white"></div>
        <div className="flex w-full px-4 sm:px-8 my-3 space-x-4 sm:space-x-0 mx-auto z-20">
          {youtube ? (
            <div className="flex-grow w-full h-full hover:drop-shadow-lg overflow-hidden aspect-video">
              <YoutubeEmbed embedId={frontmatter.youtube} />
            </div>
          ) : null}
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
        <div className="max-w-7xl m-8 ">
          <div className="flex w-full space-x-36">
            {toc.length ? (
              <div className="w-32">
                <div className="w-full sticky top-32">
                  <div className="flex flex-col w-full no-underline">
                    {toc.map((heading, index) => {
                      const clean = heading.replace(/-/g, ' ');
                      return (
                        <Link
                          href={slug + '#' + heading}
                          key={index}
                          className="font-normal py-1 no-underline font-jbd capitalize text-neutral-400 hover:text-neutral-800 transition-all"
                        >
                          {clean}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
            <div className="selection:bg-blue-200 scroll-smooth max-w-[640px] mb-4">
              <div className="not-prose flex-block flex space-y-2 pb-8">
                <div className="font-jbd space-y-3">
                  <h1 className="tracking-tight font-medium text-3xl ">
                    {frontmatter.title}
                  </h1>
                  <div className="flex md:flex md:flex-nowrap items-center text-lg font-normal pt-1 space-x-4 text-neutral-500 font-jbd tracking-tight md:space-y-0 ">
                    <p className="text-left flex-nowrap">
                      {frontmatter.readingTime}
                    </p>
                    <p className="">
                      {/* Published {dayjs(frontmatter.date).format('MMMM YYYY')} */}
                      Published {dayjs().to(dayjs(frontmatter.date))}
                    </p>
                  </div>
                </div>
              </div>
              <ProseWrapper>
                <MDXRemote
                  {...source}
                  components={{ Image, Button, BlogEntry, OneBlank }}
                />
              </ProseWrapper>
            </div>
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
