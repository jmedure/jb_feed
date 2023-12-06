import React from 'react';
import Head from 'next/head';
import { getAllArticles } from '../../src/utils/mdx_design';
// import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import DesignProjectCard from '../../components/DesignProjectCard';
import { motion } from 'framer-motion';
import MotionListWrapper from '../../components/wrappers/MotionListWrapper';
import MainHeader from '../../components/MainHeader';
import BlogSEO from '../../components/BlogSEO';

export default function Blog({ posts }) {
  return (
    <React.Fragment>
      <BlogSEO
        title="Design by Jacob Medure, Senior Product Designer"
        desciption="
          5+ years shipping bespoke solutions for consumer facing products
          across iOS, android and responsive web. First-principles thinker
          hoping to make less but better and a positive impact in the lives of
          real people."
      />
      <MainHeader type="design" />
      <div className="container-blog">
        <div className="py-24 md:py-48 h-full">
          <div className="px-4 space-y-10">
            <p>
              Hi there. Looks like you&#39;ve stumbled upon my design index.
            </p>
            <p>
              My name is Jacob and among{' '}
              <Link
                href="/"
                className="underline text-black/70 underline-offset-2 decoration-[1px] hover:underline-offset-4 transition-all hover:text-black decoration-black/20 hover:decoration-black"
              >
                other things
              </Link>{' '}
              I&#39;m a senior product designer with{' '}
              <a
                href="https://read.cv/jacobs_blue"
                className="underline text-black/70 underline-offset-2 decoration-[1px] hover:underline-offset-4 transition-all hover:text-black decoration-black/20 hover:decoration-black"
              >
                5+ years of experience
              </a>{' '}
              based in <s>Brookyln</s> Ventura, CA. I'm a first-principles
              thinker hoping to{' '}
              <a
                href="https://www.google.com/books/edition/Less_but_better/eN6doAEACAAJ?hl=en"
                className="underline text-black/70 underline-offset-2 decoration-[1px] hover:underline-offset-4 transition-all hover:text-black decoration-black/20 hover:decoration-black"
              >
                make less but better
              </a>{' '}
              and a positive impact in the lives of real people. I believe in{' '}
              <a
                href="https://createwcare.com"
                className="underline text-black/70 underline-offset-2 decoration-[1px] hover:underline-offset-4 transition-all hover:text-black decoration-black/20 hover:decoration-black"
              >
                creating with care
              </a>{' '}
              every time.
            </p>
          </div>
          <div className="font-jbd text-lg font-normal tracking-tight py-8 flex sm:space-x-24 space-y-8 overflow-hidden sm:space-y-0 flex-col sm:flex-row sm:items-start sm:justify-between">
            <ul className="flex-col w-full space-y-3 justify-between ">
              {posts.map((frontMatter, index) => {
                if (frontMatter.isPublished != 'false') {
                  return (
                    <motion.li
                      initial={{ opacity: 0, translateY: 10 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{
                        when: 'afterChildren',
                        delay: index * 0.05,
                        duration: 0.2,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      key={index}
                    >
                      <DesignProjectCard
                        slug={frontMatter.slug}
                        passHref
                        src={frontMatter.image}
                        alt={frontMatter.alt}
                        title={frontMatter.title}
                        description={frontMatter.description}
                        date={frontMatter.date}
                        lastEdited={frontMatter.lastEdited}
                        readingTime={frontMatter.readingTime}
                        isPublished={frontMatter.isPublished}
                        tile={frontMatter.tile}
                      />
                    </motion.li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-0 absolute w-full font-jbd">
        <div className="flex text-neutral-500 bg-white text-sm mx-auto space-x-1 w-full align-middle justify-center sticky bottom-0 p-8">
          <p>by</p>
          <Link href="/">Jacob&#39;s Blue</Link>
        </div>
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
