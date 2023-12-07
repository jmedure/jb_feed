import React, { useState } from 'react';
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
import siteMetadata from '../../data/siteMetadata';
import InlineLinkWrapper from '../../components/wrappers/InlineLinkWrapper';

export default function Blog({ posts }) {
  const [isActive, setIsActive] = useState(false);

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
      <div className="container-blog ">
        <div className="py-24 md:py-40 space-y-12 h-screen">
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              when: 'afterChildren',
              delay: 0.05,
              duration: 0.3,
              type: 'ease',
              stiffness: 100,
            }}
            className="space-y-16"
          >
            <div className="p-4 rounded-3xl text-lg max-w-full mx-auto space-y-4">
              <div className=" text-neutral-800 transition-all">
                <p className="">
                  Among{' '}
                  <InlineLinkWrapper href="/">other things</InlineLinkWrapper>,{' '}
                  I&#39;m a senior product designer with{' '}
                  <InlineLinkWrapper href="https://read.cv/jacobs_blue">
                    ~6 years of experience
                  </InlineLinkWrapper>{' '}
                  based in <s className="text-black/30">Brooklyn, NY</s>{' '}
                  Ventura, CA. I&#39;m a{' '}
                  <InlineLinkWrapper href="https://fs.blog/first-principles/">
                    first-principles
                  </InlineLinkWrapper>{' '}
                  thinker hoping to{' '}
                  <InlineLinkWrapper href="https://www.google.com/books/edition/Less_but_better/eN6doAEACAAJ?hl=en">
                    make less but better
                  </InlineLinkWrapper>{' '}
                  and a positive impact in the lives of real people. My aim is
                  to{' '}
                  <InlineLinkWrapper href="https://createwcare.com">
                    create with care
                  </InlineLinkWrapper>{' '}
                  every time.
                </p>
              </div>
            </div>
          </motion.div>
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
                        delay: 0.2 + index * 0.05,
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
      <div className="container-blog mx-auto bottom-0 sticky font-jbd font-medium tracking-tight p-4 pb-12 bg-white">
        <div className="flex-wrap flex pt-4 text-black/80 border-t justify-between w-full border-black/20 bg-white text-sm space-y-4 sm:space-y-0">
          <div className="w-full sm:w-min flex-row flex sm:justify-start sm:space-x-4 justify-between">
            <Link href="../" className=" whitespace-nowrap">
              Home
            </Link>
            <Link href="../library" className="whitespace-nowrap">
              Library
            </Link>
            <a
              href="mailto:jake@jacobs.blue?subject=Hi%20Jacob!%20Let's%20work"
              className="whitespace-nowrap
            "
            >
              Contact
            </a>
            <a
              href={siteMetadata.readCV}
              className="whitespace-nowrap
            "
            >
              Read.cv
            </a>
            <a
              href={siteMetadata.linkedIn}
              className="whitespace-nowrap
            "
            >
              Linked In
            </a>
          </div>
          <p className="text-black/50 whitespace-nowrap">
            © 2023 Jacob&#39;s Blue
          </p>
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
