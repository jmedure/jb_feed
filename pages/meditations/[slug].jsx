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
      {/* <MHeaderRound title={frontmatter.title} rt={frontmatter.readingTime} /> */}
      <div className="flex flex-col">
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
        <div className="w-full fixed left-0 top-0 p-12 z-10 bg-gradient-to-t from-white/0 backdrop-blur-[1px] to-white"></div>
        <div className="flex my-48 mx-8">
          {toc.length ? (
            <div className="flex w-60 pr-6">
              <div className="fixed">
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
          <div className="selection:bg-yellow-200 scroll-smooth">
            <div className="not-prose flex-block space-y-2">
              {image ? (
                <div className="relative w-full aspect-square sm:aspect-video my-8">
                  <Image
                    src={frontmatter.image}
                    alt={frontmatter.alt}
                    placeholder="blur"
                    blurDataURL="https://jacobs.blue"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ) : null}
              {youtube ? (
                <div className="lg:w-[80%] my-8 container-blog relative h-full aspect-square rounded-3xl overflow-hidden sm:aspect-video">
                  <YoutubeEmbed embedId={frontmatter.youtube} />
                </div>
              ) : null}
              <div className="font-mont space-y-2">
                <h1 className="tracking-tight  font-medium text-2xl container-blog ">
                  {frontmatter.title}
                </h1>
                {description ? (
                  <p className="text-2xl text-black/50">
                    {frontmatter.description}
                  </p>
                ) : null}
                <div className="flex container-blog md:flex md:flex-nowrap items-center text-base pt-1 space-x-4 text-neutral-700 font-mont md:space-y-0 ">
                  <p className="">
                    {dayjs(frontmatter.published).format('MMM YYYY')}
                  </p>
                  {/* <p className="text-left flex-nowrap">
                    {frontmatter.readingTime}
                  </p> */}
                </div>
              </div>
            </div>
            <article className="content prose-headings:no-underline prose-headings:text-neutral-700 scroll-smooth prose-p:tracking-tight container-blog prose-p:font-mont prose-2xl leading-snug prose-a:text-blue-400 prose-a:underline-offset-2 prose-a:decoration-blue-400 hover:prose-a:bg-blue-50 hover:prose-a:text-blue-500 prose:tracking-tighter prose-a:blue-500 prose:neutral prose-headings:tracking-tighter prose-headings:font-mont prose-headings:prose-2xl prose-headings:font-normal prose-neutral prose-ul:list-disc prose-ul:leading-tight prose-ul:text-2xl prose-ul:decoration-neutral-300 prose-p:text-neutral-700">
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
