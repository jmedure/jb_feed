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
import ProseWrapper from '../../components/mdx/ProseWrapper';
import BlogWrapper from '../../components/wrappers/BlogWrapper';
import { link } from 'fs';
import Footer from '../../components/Footer';

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
                <span className="text-xs w-5 h-5 bg-black/10 flex ml-2 px-[6px] py-[2.5px] rounded">
                  E
                </span>
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
              {frontmatter.explicit ? (
                <span className="text-xs w-5 h-5 bg-black/10 flex ml-2 px-[6px] py-[2.5px] rounded">
                  E
                </span>
              ) : null}
            </h1>
            <p className="text-black/50">by {frontmatter.artist}</p>
          </div>

          <p className="text-black/80 pt-2 text-xl">
            Track {frontmatter.track} from{' '}
            <Link
              href={`/discography/${frontmatter.albumLink}`}
              className="font-normal tracking-tight truncate w-6 sm:w-full underline whitespace-nowrap text-neutral-400 sm:hover:text-neutral-900 underline-offset-2 sm:hover:underline-offset-4 transition-all"
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
              {frontmatter.explicit ? (
                <span className="text-xs w-5 h-5 bg-black/10 flex ml-2 px-[6px] py-[2.5px] rounded">
                  E
                </span>
              ) : null}
            </h1>
          </div>
          <p className="text-black/50">by {frontmatter.artist}</p>
        </div>
      );
    }
  };

  // const hey = frontmatter.links1;
  // const StreamLinks = () => (
  //   <div>
  //     <ul>
  //       {hey.map((link) => (
  //         <li key={link}> {link} </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  // {
  //   Object.keys(frontmatter.links1).map((key) => {
  //     // return <li key={key}>{frontmatter.links[key]}</li>;
  //     return console.log(toString(frontmatter.links1));
  //   });
  // }

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

      <div className="container-fg pt-14 pb-4 text-lg font-jbd font-normal md:flex space-y-6 sm:space-y-0 md:space-x-6">
        <div
          id="links"
          className="flex-1 w-full bg-neutral-100 rounded-md py-6 px-4 space-y-6 md:py-20 mx-auto  justify-center align-middle "
        >
          <div className="bordermax-auto justify-center align-middle max-w-xl mx-auto space-y-6 flex-col w-full h-min md:sticky md:mx-auto md:top-16 ">
            <div className="flex max-w-xs sm:max-w-md relative rounded-lg overflow-hidden sm:visible aspect-square mx-auto border drop-shadow-md">
              <Image
                src={frontmatter.artwork}
                alt={frontmatter.alt}
                placeholder="blur"
                blurDataURL="https://jacobs.blue"
                // sizes="100vw"
                layout="fill"
              />
            </div>
            <div
              id="meta"
              className="font-medium text-center mx-auto flex-wrap"
            >
              <p className="text-2xl tracking-tighter">{frontmatter.title}</p>

              <div className="text-black/50 tracking-tight">
                {frontmatter.track ? (
                  <Link href={frontmatter.albumLink} className="underline">
                    <p>{frontmatter.album}</p>
                  </Link>
                ) : null}
                <p>by {frontmatter.artist}</p>
              </div>
            </div>
            <ol id="links" className="flex flex-col space-y-2 w-full mx-auto">
              {links.map((link, i) => {
                return <StreamLink key={i} href={link} />;
              })}
            </ol>
          </div>
        </div>

        <BlogWrapper>
          <div className="flex-col sm:max-w-[640px] sm:flex-none justify-between">
            {songType()}
            <div className="flex space-x-auto justify-between columns-3">
              <div className="">
                <h3 className="text-base text-neutral-600">Released</h3>
                <p className="pt-1">
                  {dayjs(frontmatter.released).format('MMM D, YYYY')}
                </p>
              </div>
              <div className="">
                <h3 className="text-base text-neutral-600">Written</h3>
                <p className="pt-1">{frontmatter.written}</p>
              </div>
              <div className="">
                <h3 className="text-base text-neutral-600">Produced</h3>
                <p className="pt-1">{frontmatter.produced}</p>
              </div>
            </div>
          </div>

          <ProseWrapper>
            <MDXRemote
              {...source}
              components={{ Image, Button, Link, MoreLinkBlog }}
            />
          </ProseWrapper>
        </BlogWrapper>

        {/* <div className="flex container justify-center sticky z-30 bottom-8 drop-shadow-lg pt-12">
        <iframe
          className="h-20 w-full backdrop-blur-sm border border-black border-solid overflow-clip rounded-xl "
          src={`https://open.spotify.com/embed/${frontmatter.spotifyEmbed}?utm_source=generator&theme=1`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div> */}
      </div>
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
