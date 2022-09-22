import React from 'react';
import Head from 'next/head';
import { getAllArticles } from '../../src/utils/mdx_med';
import MHeader from '../../components/MHeader';
import BlogEntry from '../../components/BlogEntry';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <title>Meditations of a Rockstar | Jacob&#39;s Blue</title>
      </Head>

      <div className="container-fg">
        <div className="flex align-middle justify-center mt-16 md:mt-8 rotate-2 transition-all hover:rotate-0 hover:text-blue-500">
          <Link href="/">
            <div className="flex flex-row items-center space-x-2 mx-auto align-middle cursor-pointer">
              <span className="material-icons text-base">west</span>
              <p className="uppercase font-mont font-medium tracking-tight">
                Back to home
              </p>
            </div>
          </Link>
        </div>
        <div className="">
          <div className="font-fruit py-20 md:py-28 items-center text-center ">
            <h1 className="text-8xl tracking-tighter sm:text-[8em] md:text-[12em] lg:text-[14em]">
              Meditations of a <i>Rockstar</i>
            </h1>
            <p className="uppercase font-mont text-xl font-medium tracking-tight py-4">
              from <Link href="/"><a className='hover:text-blue-500 hover:decoration-blue-500'>Jacob&#39;s Blue</a></Link>
            </p>
            {/* <div className='items-center text-center justify-center'>
                  <span className='material-icons text-base py-12'>south</span>
              </div> */}
          </div>

          {/* <h3 className='text-3xl mb-4 tracking-tight'></h3> */}

          <div className="py-12 divide-y divide-neutral-400">
            <div className="font-mont text-sm font-medium tracking-tight py-2 flex items-center justify-between">
              <h2 className="uppercase ">Entries </h2>
              <sup className=" text-neutral-400 font-thin">({posts.length})</sup>
            </div>
            {posts.map((frontMatter, index) => {
              return (
                <BlogEntry
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
                />
              );
            })}
          </div>
        </div>
        <Footer />
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
