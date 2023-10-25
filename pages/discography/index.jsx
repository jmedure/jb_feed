import React from 'react';
import Head from 'next/head';
import { getAllArticles } from '../../src/utils/mdx_songs';
import SongCard from '../../components/cards/SongCard';
import Footer from '../../components/Footer';
import MainHeader from '../../components/MainHeader';
import SectionHeader from '../../components/SectionHeader';
import MainGridWrapper from '../../components/wrappers/MainGridWrapper';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

export default function Blog({ posts }) {
  const title = 'Discography';

  return (
    <React.Fragment>
      <Head>
        <title>Jacob&#39;s Blue | {title}</title>
      </Head>
      <div className="font-jbd font-medium text-xl leading-tight tracking-tight">
        <MainHeader title={title} />
        <div className="pb-4 space-y-8">
          <div id="" className="space-y-4">
            <SectionHeader title="Albums and EPs" />
            <MainGridWrapper>
              {posts.map((frontMatter, index) => {
                if (
                  frontMatter.published == 'true' &&
                  frontMatter.type == 'album'
                ) {
                  return (
                    <motion.div
                      initial={{ opacity: 0, translateY: 10 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{
                        type: 'spring',
                        delay: index * 0.1,
                        stiffness: 200,
                        duration: 0.5,
                      }}
                      key={index}
                    >
                      <SongCard
                        slug={frontMatter.slug}
                        type={frontMatter.type}
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
                    </motion.div>
                  );
                }
              })}
            </MainGridWrapper>
          </div>
          <div id="segment" className="space-y-4">
            <SectionHeader title="Songs" />
            <MainGridWrapper>
              {posts.map((frontMatter, index) => {
                if (
                  frontMatter.published == 'true' &&
                  frontMatter.type != 'album'
                ) {
                  return (
                    <motion.div
                      initial={{ opacity: 0, translateY: 10 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{
                        type: 'spring',
                        delay: index * 0.1,
                        stiffness: 200,
                        duration: 0.5,
                      }}
                      key={index}
                    >
                      <SongCard
                        slug={frontMatter.slug}
                        type={frontMatter.type}
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
                    </motion.div>
                  );
                }
              })}
            </MainGridWrapper>
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
