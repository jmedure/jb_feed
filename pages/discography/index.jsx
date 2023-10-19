import React from 'react';
import Head from 'next/head';
import { getAllArticles } from '../../src/utils/mdx_songs';
import SongCard from '../../components/SongCard';
import Footer from '../../components/Footer';
import AlbumCard from '../../components/AlbumCard';
import MainHeader from '../../components/MainHeader';

export default function Blog({ posts }) {
  const title = 'Discography';

  return (
    <React.Fragment>
      <Head>
        <title>Jacob&#39;s Blue | {title}</title>
      </Head>

      <div className="">
        {/* <JBHeader /> */}
        <div className="w-full bg-white top-0 sticky z-10">
          <MainHeader title={title} />
        </div>
        <div className="mb-12 font-jbd font-normal">
          {/* <div className="my-20 container-fg space-y-1">
            <h1 className="text-3xl tracking-tight">Discography</h1>
            <p className="text-lg text-black/70">Lyrics, credits and more.</p>
          </div> */}

          <div className="container-fg my-1 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols- sm:space-y-0 lg:rounded-[3em] sm:gap-y-4 lg:grid lg:grid-flow-row lg:grid-cols-4 gap-4">
            {posts.map((frontMatter, index) => {
              if (
                frontMatter.published == 'true' &&
                frontMatter.type != 'album'
              ) {
                return (
                  <SongCard
                    slug={frontMatter.slug}
                    type={frontMatter.type}
                    key={index}
                    passHref
                    src={frontMatter.artwork}
                    alt={frontMatter.alt}
                    title={frontMatter.title}
                    album={frontMatter.album}
                    released={frontMatter.released}
                    readingTime={frontMatter.readingTime}
                    albumLink={frontMatter.albumLink}
                    description={frontMatter.description}
                    trackNumber={frontMatter.track}
                    spotifyEmbed={frontMatter.spotifyEmbed}
                  />
                );
              }
            })}
          </div>
          <div className="my-4 container-fg">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl my-2 pt-2 tracking-tight">Albums</h3>
              <div className="flex items-center space-x-2">
                <span className="material-icons">chevron_left</span>
                <span className="material-icons">chevron_right</span>
              </div>
            </div>
            <div className="flex border-t border-solid border-black py-4 overflow-x-auto scroll-m-6 snap-x snap-mandatory space-x-4">
              {posts.map((frontMatter, index) => {
                if (
                  frontMatter.published == 'true' &&
                  frontMatter.type == 'album'
                ) {
                  return (
                    <AlbumCard
                      slug={frontMatter.slug}
                      type={frontMatter.type}
                      key={index}
                      passHref
                      src={frontMatter.artwork}
                      alt={frontMatter.alt}
                      title={frontMatter.title}
                      album={frontMatter.album}
                      released={frontMatter.released}
                      readingTime={frontMatter.readingTime}
                      albumLink={frontMatter.albumLink}
                      description={frontMatter.description}
                      trackNumber={frontMatter.track}
                      spotifyEmbed={frontMatter.spotifyEmbed}
                    />
                  );
                }
              })}
            </div>
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
    return new Date(b.released) - new Date(a.released);
  });

  return {
    props: {
      posts: sortedArticles,
    },
  };
}
