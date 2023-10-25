import dayjs from 'dayjs';
import React from 'react';
import Head from 'next/head';
import Image from 'next/legacy/image';
import rehypeSlug from 'rehype-slug';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import { serialize } from 'next-mdx-remote/serialize';
import { getSlug, getArticleFromSlug } from '../../src/utils/mdx_songs';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Button from '../../components/Button';
import Link from 'next/link';
import StreamLink from '../../components/StreamLink';
import MoreLinkBlog from '../../components/MoreLinkBlog';
import BlogSEO from '../../components/BlogSEO';
import MainHeader from '../../components/MainHeader';
import ProseWrapperSongs from '../../components/mdx/ProseWrapperSongs';
import BlogWrapper from '../../components/wrappers/BlogWrapper';
import { link } from 'fs';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Tracklist from '../../components/mdx/Tracklist';
import ArchiveEntry from '../../components/cards/ArchiveEntry';
import ExplicitTag from '../../components/tags/ExplicitTag';

export default function BlogPost({ post: { source, frontmatter } }) {
  const links = frontmatter.links;

  const songType = () => {
    if (frontmatter.type === 'album') {
      return (
        <div className="flex font-medium tracking-tighter flex-col text-2xl">
          <div className="flex-wrap space-y-4">
            <h1 className="flex items-center space-x-2">
              {frontmatter.title}

              {/* <span className="flex text-xs w-5 h-5 bg-black/10 border px-[6px] py-[2.5px] rounded">
                {frontmatter.explicit}
              </span> */}
              {frontmatter.explicit ? (
                // <span className="text-xs w-5 h-5 bg-black/10 flex ml-2 px-[6px] py-[2.5px] rounded">
                //   E
                // </span>
                <ExplicitTag />
              ) : null}
            </h1>
          </div>
          <p className="text-black/50">by {frontmatter.artist}</p>
        </div>
      );
    }
    if (frontmatter.type == 'song') {
      return (
        <div className="flex font-medium tracking-tighter flex-col text-2xl space-y-4">
          <div className="flex-wrap">
            <h1 className="flex items-center space-x-2">
              {frontmatter.title}
              {/* <span className="flex text-xs w-5 h-5 bg-black/10 border px-[6px] py-[2.5px] rounded">
                {frontmatter.explicit}
              </span> */}
              {frontmatter.explicit ? <ExplicitTag /> : null}
            </h1>
            <p className="text-black/50">by {frontmatter.artist}</p>
          </div>

          <p className="text-black/70 font-normal pt-2 text-lg">
            Track {frontmatter.track} from{' '}
            <Link
              href={`./${frontmatter.albumLink}`}
              className="font-normal tracking-tight sm:w-full underline whitespace-nowrap sm:hover:text-neutral-900 underline-offset-2 sm:hover:underline-offset-4 transition-all"
            >
              {frontmatter.album}
            </Link>
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex font-medium tracking-tighter flex-col text-2xl">
          <div className="flex-wrap space-y-4">
            <h1 className="flex items-center space-x-2">
              {frontmatter.title}
              {/* <span className="flex text-xs w-5 h-5 bg-black/10 border px-[6px] py-[2.5px] rounded">
                {frontmatter.explicit}
              </span> */}
              {frontmatter.explicit ? <ExplicitTag /> : null}
            </h1>
          </div>
          <p className="text-black/50">by {frontmatter.artist}</p>
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <BlogSEO
        title={frontmatter.title + " by Jacob's Blue"}
        description="Lyrics, credits, and all streaming links"
        canonical={frontmatter.slug}
        image={frontmatter.artwork}
      />
      <MainHeader type="blog" />

      {/* NEW */}

      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          when: 'afterChildren',
          delay: 0.1,
          duration: 0.2,
          type: 'spring',
          stiffness: 200,
        }}
        className="container-fg pt-14 pb-4 text-lg font-jbd font-normal lg:flex space-y-6 lg:space-y-0 lg:space-x-6"
      >
        <div
          id="links"
          className="flex-1 flex bg-neutral-100 w-full rounded-lg py-6 px-4 space-y-6 md:py-20 md:px-full mx-auto justify-center align-middle "
        >
          <div className="justify-center align-middle max-w-lg mx-auto md:sticky top-24 space-y-8 flex-col w-full h-min  ">
            <div className="flex max-w-xs sm:max-w-xs relative rounded-lg overflow-hidden sm:visible aspect-square mx-auto border drop-shadow-md">
              <Image
                src={frontmatter.artwork}
                alt={frontmatter.alt}
                placeholder="blur"
                blurDataURL="https://jacobs.blue"
                layout="fill"
              />
            </div>
            <div
              id="meta"
              className="font-medium text-center mx-auto flex-wrap"
            >
              <p className="text-2xl tracking-tight">{frontmatter.title}</p>

              <div className="text-black/50 tracking-tight">
                {frontmatter.track ? (
                  <Link
                    href={frontmatter.albumLink}
                    className="font-normal tracking-tight sm:w-full underline whitespace-nowrap sm:hover:text-neutral-900 underline-offset-2 sm:hover:underline-offset-4 transition-all"
                  >
                    <p>{frontmatter.album}</p>
                  </Link>
                ) : null}
                <p className="font-normal">by {frontmatter.artist}</p>
              </div>
            </div>
            <ol id="links" className="flex flex-col space-y-3 w-full mx-auto">
              {links.map((link, i) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, translateY: 5 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      when: 'afterChildren',
                      delay: i * 0.1,
                      duration: 0.2,
                      type: 'spring',
                      stiffness: '200',
                    }}
                    key={i}
                  >
                    <StreamLink href={link} />
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>

        <BlogWrapper>
          <div className="flex-col sm:max-w-[640px] sm:flex-none justify-between">
            {songType()}

            <ProseWrapperSongs>
              <MDXRemote
                {...source}
                components={{
                  Image,
                  Button,
                  Link,
                  MoreLinkBlog,
                  Tracklist,
                  ArchiveEntry,
                }}
              />
            </ProseWrapperSongs>
          </div>
        </BlogWrapper>

        {/* <div className="flex container justify-center sticky z-30 bottom-8 drop-shadow-lg pt-12">
        <iframe
          className="h-20 w-full backdrop-blur-sm border border-black border-solid overflow-clip rounded-xl "
          src={`https://open.spotify.com/embed/${frontmatter.spotifyEmbed}?utm_source=generator&theme=1`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div> */}
      </motion.div>
      <Footer />
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
