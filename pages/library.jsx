import Footer from '../components/Footer';
import Head from 'next/head';
import React from 'react';
import MainHeader from '../components/MainHeader';
import useSWR from 'swr';
import { Book } from '../components/Book';
import MainGridWrapper from '../components/wrappers/MainGridWrapper';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Library() {
  const title = 'Library';
  const { data, error } = useSWR('/api/books', fetcher);

  // const rank = data.length;
  // console.log(rank);

  const main = () => {
    if (error) {
      return <main>error: failed to load</main>;
    }
    if (!data) {
      return (
        <main className="container w-full mx-auto flex flex-col justify-center items-center align-middle h-screen">
          <p className="text-xl">Loading...</p>
        </main>
      );
    }

    const sorted = data.sort((a, b) => a.rank - b.rank);
    const seg1 = sorted.filter((book) => book.segment === 1);
    const seg2 = sorted.filter((book) => book.segment === 2);
    const seg3 = sorted.filter((book) => book.segment === 3);
    const seg4 = sorted.filter((book) => book.segment === 4);

    return (
      <>
        <Head>
          <title>Jacob&#39;s Blue | {title}</title>
        </Head>
        <main className="">
          <MainHeader title={title} />
          <div className="container-fg space-y-8">
            <div className="font-jbd font-normal text-lg leading-snug tracking-tight text-black/80">
              <p className="text-left justify-start max-w-[500px]">
                Beyond pure entertainment books give me immense value. I’ve
                decided to share and rank these books by their marginal impact
                on my life and efforts towards the following goals:
                <ul className="list-decimal list-inside pl-2 pt-4">
                  <li>being the best man I can be</li>
                  <li>pursuing mastery in my craft</li>
                </ul>
              </p>
            </div>
            <div id="gallery" className="space-y-4">
              <div
                id="segment"
                className="text-lg tracking-tight font-medium space-y-4"
              >
                <h3>Prerequisites for a good life</h3>
                <MainGridWrapper>
                  {seg1.map(function (book, index) {
                    return <Book key={index} book={book} />;
                  })}
                </MainGridWrapper>
              </div>
              <div
                id="segment"
                className="text-lg tracking-tight font-medium space-y-4"
              >
                <h3>On the pursuit of mastery</h3>
                <MainGridWrapper>
                  {seg2.map(function (book, index) {
                    return <Book key={index} book={book} />;
                  })}
                </MainGridWrapper>
              </div>
            </div>
          </div>
          <div className="mt-1 mb-4">
            <div className="flex container-fg lg:mb-0 mt-2 flex-col lg:gap-y-4 lg:grid lg:grid-flow-row lg:grid-cols-2 gap-x-8"></div>
          </div>
          <Footer />
        </main>
      </>
    );
  };

  return <>{main()}</>;
}
