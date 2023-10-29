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
import ProseWrapperDesign from '../../components/mdx/ProseWrapperDesign';
import MainHeader from '../../components/MainHeader';
import BlogHeroBanner from '../../components/mdx/BlogHeroBanner';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import DesignsWrapper from '../../components/wrappers/DesignsWrapper';
import BlogMetaHeader from '../../components/wrappers/BlogMetaHeader';
import { motion } from 'framer-motion';
import TableOfContents from '../../components/TableOfContents';

export default function BlogPost({ post: { source, frontmatter } }) {
  const image = frontmatter.image;
  const youtube = frontmatter.youtube;
  const toc = frontmatter.toc;
  const slug = frontmatter.slug;
  const updated = frontmatter.updated;
  const lastTendedTo = dayjs().to(dayjs(updated));
  const published = dayjs().to(dayjs(frontmatter.date));
  const router = useRouter();
  const currentRoute = router.asPath.split('#')[0];

  return (
    <React.Fragment>
      <BlogSEO
        title={frontmatter.title + " | Jacob's Blue"}
        description={frontmatter.description}
        canonical={frontmatter.slug}
        image={frontmatter.thumbnail}
      />
      <MainHeader type="design" />
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          when: 'afterChildren',
          delay: 0.3,
          duration: 0.3,
          type: 'ease',
          stiffness: 200,
        }}
        className="flex flex-col w-full mx-auto py-3"
      >
        <BlogHeroBanner
          youtube={youtube}
          embedID={frontmatter.youtube}
          image={image}
          src={frontmatter.image}
          alt={frontmatter.alt}
        />
        <div
          className={
            (image ? 'w-full container-fg py-4' : 'w-full container-fg py-16') +
            ''
          }
        >
          {/* <div
            id="toc"
            className="flex w-full border lg:space-x-48 sm:space-x-12 md:space-x-24"
          > */}

          <DesignsWrapper>
            {toc.length ? (
              // <motion.div
              //   initial={{ opacity: 0, translateY: 10 }}
              //   animate={{ opacity: 1, translateY: 0 }}
              //   transition={{
              //     when: 'afterChildren',
              //     delay: 0.5,
              //     duration: 0.5,
              //     type: 'ease',
              //     // stiffness: 100,
              //   }}
              //   className="hidden lg:flex sticky top-36 h-0"
              // >
              //   <div className="relative -left-40 top-4 xl:-left-60 whitespace-nowrap h-min w-min">
              //     <div className="flex flex-col w-full">
              //       {toc.map((heading, index) => {
              //         const clean = heading.replace(/-/g, ' ');
              //         return (
              //           <Link
              //             href={slug + '#' + heading}
              //             key={index}
              //             className="font-normal tracking-tight py-1 text-base font-jbd capitalize text-neutral-400 hover:text-neutral-800 transition-all"
              //           >
              //             {clean}
              //           </Link>
              //         );
              //       })}
              //     </div>
              //   </div>
              // </motion.div>
              <TableOfContents
                toc={frontmatter.toc}
                slug={frontmatter.slug}
                title={frontmatter.title}
              />
            ) : null}
            <BlogMetaHeader
              title={frontmatter.title}
              readingTime={frontmatter.readingTime}
              published={published}
              updated={updated}
              lastTendedTo={lastTendedTo}
              status={frontmatter.status}
              version={frontmatter.version}
            />
            <ProseWrapperDesign>
              <MDXRemote
                {...source}
                components={{
                  Image,
                  Button,
                  BlogEntry,
                  OneBlank,
                  YoutubeEmbed,
                }}
              />
            </ProseWrapperDesign>
          </DesignsWrapper>
          {/* </div> */}
        </div>
      </motion.div>
      <Footer btt={slug} />
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
