import React from 'react';
import Head from 'next/head';
import { getAllArticles } from '../../src/utils/mdx_design';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import DesignProjectCard from '../../components/DesignProjectCard';
import { motion } from 'framer-motion';

export default function Blog({ posts }) {
  // const list = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       when: 'afterChildren',
  //       delayChildren: 0.5,
  //       staggerChildren: 1,
  //     },
  //   },
  // };

  // const item = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1 },
  //   transition: { duration: 3 },
  // };

  return (
    <React.Fragment>
      <Head>
        <title>/design by Jacob&#39;s Blue</title>
      </Head>

      <div className="container">
        <div className="flex sticky top-0 p-4 bg-white align-middle justify-center mt-16 md:mt-8 transition-all hover:text-blue-500">
          <Link href="/" passHref legacyBehavior>
            <div className="flex col-span-1 py-2 justify-end space-x-1 items-center hover:drop-shadow-xl transition-all duration-200 cursor-pointer">
              <div className="border-white border-2 rounded-full relative p-5 cursor-pointer">
                <Image alt="blue gradient" src="/logo.png" sizes="100" fill />
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <div className="py-24 md:py-48 h-full">
            <div className="font-mono font-light text-sm tracking-tight py-8 flex sm:space-x-24 space-y-8 overflow-hidden sm:space-y-0 flex-col sm:flex-row sm:items-start sm:justify-between">
              <ul className="w-full space-y-2 justify-between">
                {posts.map((frontMatter, index) => {
                  if (frontMatter.isPublished == 'true') {
                    return (
                      <motion.li
                        initial={{ opacity: 0, translateY: 5 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                          when: 'afterChildren',
                          delay: index * 0.3,
                          duration: 0.3,
                          type: 'tween',
                          // staggerChildren: 1,
                          ease: 'linear',
                        }}
                        key={index}
                      >
                        <DesignProjectCard
                          slug={frontMatter.slug}
                          // key={index}
                          passHref
                          src={frontMatter.image}
                          alt={frontMatter.alt}
                          title={frontMatter.title}
                          description={frontMatter.description}
                          date={frontMatter.date}
                          lastEdited={frontMatter.lastEdited}
                          readingTime={frontMatter.readingTime}
                          isPublished={frontMatter.isPublished}
                          color={frontMatter.color}
                        />
                      </motion.li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-neutral-500 bg-white text-xs mx-auto space-x-2 w-full align-middle justify-center sticky bottom-0 font-mono p-4">
        <p>Meditations of a Rockstar by</p>
        <Link href="/">Jacob&#39;s Blue</Link>
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
