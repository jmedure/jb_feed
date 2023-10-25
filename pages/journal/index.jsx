import React from 'react';
import Head from 'next/head';
import { getAllArticles } from '../../src/utils/mdx_med';
// import Footer from '../../components/Footer';
import Link from 'next/link';
import BlogEntryJournal from '../../components/BlogEntryJournal';
import Image from 'next/legacy/image';
import MainHeader from '../../components/MainHeader';
import { motion } from 'framer-motion';

export default function Blog({ posts }) {
  const title = 'journal';
  // let height = window.innerHeight;
  // const twcssh = 'h-[' + height + 'px]';

  return (
    <React.Fragment>
      <Head>
        <title>Jacob&#39;s Blue | {title}</title>
      </Head>

      <MainHeader type="blog" />
      <div className="container-fg my-16 py-auto flex max-w-[640px]">
        <ul className="flex list-none flex-wrap py-40 w-full  my-auto  space-y-4">
          {posts.map((frontMatter, index) => {
            if (frontMatter.isPublished == 'true') {
              return (
                <motion.li
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    when: 'afterChildren',
                    delay: index * 0.05,
                    duration: 0.2,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className="w-full"
                  key={index}
                >
                  <BlogEntryJournal
                    slug={frontMatter.slug}
                    key={index}
                    passHref
                    src={frontMatter.image}
                    alt={frontMatter.alt}
                    title={frontMatter.title}
                    description={frontMatter.description}
                    date={frontMatter.date}
                    lastEdited={frontMatter.lastEdited}
                    readingTime={frontMatter.readingTime}
                    isPublished={frontMatter.isPublished}
                  />
                </motion.li>
              );
            }
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  let articles = await getAllArticles();

  const sortedArticles = articles.map((article) => article);

  sortedArticles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return {
    props: {
      posts: sortedArticles,
    },
  };
}
