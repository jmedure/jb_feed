import React from 'react';
import Head from 'next/head';
import { getAllArticles } from '../../src/utils/mdx_fg';
import MHeader from '../../components/MHeader';
import FgEntry from '../../components/FgEntry';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function freeGame({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <title>Free Game by Jacob&#39;s Blue</title>
      </Head>

      <div className="container-fg">
        <div className="flex w-full py-4 justify-between items-center">
        <Link href="/">
            <div className="flex flex-col items-left cursor-pointer justify-start">
              <p className="uppercase font-mont text-xl font-medium tracking-tight">
                Free Game 
              </p>
              <p className='uppercase text-sm font-mont font-medium tracking-tight'>by Jacob&#39;s Blue</p>
            </div>
          </Link>
          
          <Link href="/free-game">
            <div className="flex rotate h-16 w-16 relative cursor-pointer">
                <Image
                src="/fg/FGMain.svg"
                alt="free game logo"
                objectFit="contain"
                layout="fill"
                />
            </div>
          </Link>
          <Link href="/">
            <div className="flex flex-row items-center space-x-2 cursor-pointer justify-end">
              <span className="material-icons text-base">west</span>
              <p className="uppercase font-mont font-medium tracking-tight">
                Back to home
              </p>
            </div>
          </Link>
          
        </div>
        
        <div className="">
          
          <div className="font-mont py-24 items-center text-left">
            <p className="text-6xl md:text-[10em] tracking-tight leading-none w-full font-fruit">
              I created <strong className='font-medium font-mont uppercase'>free game</strong> to share everything I&#39;ve ever learned as an artist with anyone else sharing my dream.
            </p>
            {/* <div className='items-center text-center justify-center'>
                  <span className='material-icons text-base py-12'>south</span>
                </div> */}
          </div>

          {/* <h3 className='text-3xl mb-4 tracking-tight'></h3> */}

          <div className="py-8">
            <div className="font-mont text-base font-medium tracking-tight py-2 flex items-center justify-between">
              <h2 className="uppercase ">ideas  </h2>
              {/* <sup className=" text-neutral-400">({posts.length})</sup> */}
            </div>
            {posts.map((frontMatter, index) => {
              return (
                <FgEntry
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
