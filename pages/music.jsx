/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/legacy/image';
import MainHeader from '../components/MainHeader';
import { Post } from '../components/cards/Post';
import useSWR from 'swr';
import Footer from '../components/Footer';
import HeadSeo from '../components/HeadSEO';
import siteMetadata from '../data/siteMetadata';
import BlogSEO from '../components/BlogSEO';
import { motion } from 'framer-motion';
import MasonryWrapper from '../components/wrappers/MasonryWrapper';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/posts', fetcher);

  const main = () => {
    if (error) {
      return <main>error: failed to load</main>;
    }
    if (!data) {
      return <main>loading...</main>;
    }
    // let allPosts = data.filter(post,index)
    return (
      <main className="">
        <MainHeader />
        <MasonryWrapper>
          {data
            .filter(function (posts) {
              return posts.kind === 'music' && posts.published == 'true';
            })
            .map(function (post, index) {
              return (
                <motion.li
                  initial={{ opacity: 0, translateY: 10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    when: 'afterChildren',
                    delay: index * 0.1,
                    duration: 0.2,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className="list-none"
                  key={index}
                >
                  <Post post={post} />
                </motion.li>
              );
            })}
        </MasonryWrapper>
        <Footer />
      </main>
    );
  };

  return (
    <>
      <Head>
        <title>Jacob's Blue</title>
      </Head>
      {main()}
    </>
  );
}
