/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/legacy/image';
import MainHeader from '../components/MainHeader';
import { Post } from '../components/cards/Post';
import useSWR from 'swr';
import Footer from '../components/Footer';
import MasonryWrapper from '../components/wrappers/MasonryWrapper';
import { motion } from 'framer-motion';
import Subheader from '../components/Subheader';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/posts', fetcher);

  const main = () => {
    if (error) {
      return <main>error: failed to load</main>;
    }
    if (!data) {
      return (
        <main>
          <Subheader />
        </main>
      );
    }
    // let allPosts = data.filter(post,index)
    return (
      <main className="">
        <MainHeader />
        <MasonryWrapper>
          {data
            .filter(function (posts) {
              return posts.kind === 'video' && posts.published == 'true';
            })
            .map(function (post, index) {
              return (
                <motion.li
                  initial={{ opacity: 0, translateY: 10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    when: 'afterChildren',
                    delay: index * 0.05,
                    type: 'spring',
                    stiffness: 100,
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
