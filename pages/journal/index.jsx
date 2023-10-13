import React from 'react';
import Head from 'next/head';
import { getAllArticles } from '../../src/utils/mdx_med';
// import Footer from '../../components/Footer';
import Link from 'next/link';
import BlogEntryJournal from '../../components/BlogEntryJournal';
import Image from 'next/legacy/image';

export default function Blog({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <title>Meditations of a Rockstar | Jacob&#39;s Blue</title>
      </Head>

      <div className="max-w-[640px] mx-auto">
        <div className="flex sticky top-0 p-4 bg-white align-middle justify-center mt-16 md:mt-8 transition-all hover:text-blue-500">
          <Link href="/" passHref legacyBehavior>
            <div className="flex col-span-1 py-2 justify-end space-x-1 items-center hover:drop-shadow-xl transition-all duration-200 cursor-pointer">
              <div className="border-white border-2 rounded-full relative p-5 cursor-pointer">
                <Image
                  alt="blue gradient"
                  src="/logo.png"
                  sizes="100vw"
                  layout="fill"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <div className="py-24 md:py-32 h-full">
            <div className="font-mono font-light text-sm tracking-tight py-8 flex sm:space-x-24 space-y-8 overflow-hidden sm:space-y-0 flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="w-full space-y-6">
                {posts.map((frontMatter, index) => {
                  if (frontMatter.isPublished == 'true') {
                    return (
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
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed text-neutral-500 bg-white text-xs items-center bottom-0 font-mono p-4">
        <div className="flex space-x-2 mx-auto border w-full self-center align-middle justify-center">
          <p>Meditations of a Rockstar by</p>
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
