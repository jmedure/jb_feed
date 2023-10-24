import Footer from '../components/Footer';
import Head from 'next/head';
import React from 'react';
import MainHeader from '../components/MainHeader';
import useSWR from 'swr';
import { Book } from '../components/cards/Book';
import MainGridWrapper from '../components/wrappers/MainGridWrapper';
import SectionHeader from '../components/SectionHeader';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Library() {
  const title = 'Library';
  const { data, error } = useSWR('/api/books', fetcher);
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
    const seg5 = sorted.filter((book) => book.segment === 5);

    return (
      <>
        <Head>
          <title>Jacob&#39;s Blue | {title}</title>
        </Head>
        <main className="">
          <MainHeader title={title} />
          <div className="space-y-8">
            <div className="container-fg font-jbd font-normal text-xl leading-tight tracking-tight text-black/80 py-16">
              <p className="text-left justify-start max-w-[500px]">
                Beyond pure entertainment books give me immense value. In hopes
                to both share my interests and provide value to you, I’ve
                attempted to rank these books by their marginal impact on my
                life as they pertain to my efforts towards the following goals:
                <ul className="list-decimal list-inside pl-2 pt-4">
                  <li>being the best man I can be</li>
                  <li>pursuing mastery in my craft</li>
                </ul>
              </p>
            </div>
            <div
              id="gallery"
              className="text-xl tracking-tight font-medium space-y-8"
            >
              <div id="segment" className="space-y-4">
                <SectionHeader title="Prerequisites for a good life" />
                <MainGridWrapper>
                  {seg1.map(function (book, index) {
                    return <Book key={index} book={book} />;
                  })}
                </MainGridWrapper>
              </div>
              <div id="segment" className="space-y-4">
                <SectionHeader title="Daily readers" />
                <MainGridWrapper>
                  {seg2.map(function (book, index) {
                    return <Book key={index} book={book} />;
                  })}
                </MainGridWrapper>
              </div>
              <div id="segment" className="space-y-4">
                <SectionHeader title="On the pursuit of mastery" />
                <MainGridWrapper>
                  {seg3.map(function (book, index) {
                    return <Book key={index} book={book} />;
                  })}
                </MainGridWrapper>
              </div>
              <div id="segment" className="space-y-4">
                <SectionHeader title="Other impactful fiction" />
                <MainGridWrapper>
                  {seg4.map(function (book, index) {
                    return <Book key={index} book={book} />;
                  })}
                </MainGridWrapper>
              </div>
              <div id="segment" className="space-y-4">
                <SectionHeader title="Other thought-provoking non-fiction" />
                <MainGridWrapper>
                  {seg5.map(function (book, index) {
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
