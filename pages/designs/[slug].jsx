import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
import React from 'react';
import Image from 'next/image';
import rehypeSlug from 'rehype-slug';
import { MDXRemote } from 'next-mdx-remote';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import { serialize } from 'next-mdx-remote/serialize';
import { getSlug, getArticleFromSlug } from '../../src/utils/mdx_design';
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
  const description = frontmatter.description;
  const toc = frontmatter.toc;
  const slug = frontmatter.slug;
  const updated = frontmatter.updated;

  const lastTendedTo = dayjs().to(dayjs(updated));
  const published = dayjs().to(dayjs(frontmatter.date));

  return (
    <React.Fragment>
      <BlogSEO
        title={frontmatter.title + " from /design by Jacob's Blue"}
        description={description}
        canonical={frontmatter.slug}
        image={frontmatter.thumbnail}
      />
      {/* <MHeaderRound title={frontmatter.title} rt={frontmatter.readingTime} /> */}
      <div className="flex flex-col w-full mx-auto">
        <div className="flex pt-8 container-fg pb-6 flex-row w-full z-20 items-center space-x-1">
          {/* <Link
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
          </Link> */}
          <Breadcrumbs
            // replaceCharacterList={[{ from: '-', to: '  ' }]}
            rootLabel="index"
            transformLabel={(label) => ' / ' + label + ' '}
            listClassName="flex space-x-1 capitalize font-jbd font-normal tracking-tight"
            activeItemClassName="text-black"
            inactiveItemClassName="text-black/50 hover:decoration-black hover:text-black transition-all"
          />
        </div>

        <div className="w-full fixed left-0 top-0 p-10 z-10 bg-gradient-to-t from-white/0 backdrop-blur-[1px] to-white"></div>
        <div className="flex w-[98%] mb-8 space-x-4 sm:space-x-0 mx-auto py-2 z-20">
          {youtube ? (
            <div className="flex-grow w-full h-full hover:drop-shadow-lg overflow-hidden aspect-video">
              <YoutubeEmbed embedId={frontmatter.youtube} />
            </div>
          ) : null}
          {image ? (
            <div className="relative w-full flex aspect-video p-8">
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
        <div className="w-full container-fg">
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
            <div className="selection:bg-blue-200 scroll-smooth max-w-[640px] mb-12">
              <div className="not-prose flex-block flex space-y-2 pb-8">
                <div className="font-jbd space-y-3">
                  <h1 className="tracking-tight font-medium text-3xl ">
                    {frontmatter.title}
                  </h1>
                  <div className="flex md:flex md:flex-nowrap items-center text-lg font-normal pt-1 space-x-4 text-neutral-500 font-jbd tracking-tight md:space-y-0 ">
                    <p className="text-left flex-nowrap">
                      {frontmatter.readingTime}
                    </p>
                    <p className="">Posted {published}</p>
                    {updated ? (
                      <p className="">Last tended to {lastTendedTo}</p>
                    ) : null}
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
        <div className="w-full border-t text-black/50 border-">
          <div className="container-fg w-full py-4 flex">
            <p>by Jacob&#39;s blue</p>
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
