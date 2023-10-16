/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/legacy/image';
import MainHeader from '../components/MainHeader';
import { Post } from '../components/Post';
import useSWR from 'swr';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import HeadSeo from '../components/HeadSEO';
import siteMetadata from '../data/siteMetadata';
import BlogSEO from '../components/BlogSEO';
import { motion } from 'framer-motion';

const fetcher = (url) => fetch(url).then((res) => res.json());

// const container = {
//   hidden: { opacity: 0, y: -24 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delayChildren: 0.5,
//       staggerDirection: -1,
//     },
//   },
// };

export default function Home() {
  const { data, error } = useSWR('/api/posts', fetcher);

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
    // let allPosts = data.filter(post,index)
    return (
      <main className="">
        <div className="flex-wrap  to-white/80 from-white/90 bg-gradient-to-t backdrop-blur-sm sticky top-0 z-30">
          <MainHeader />
        </div>
        <div className="container-fg columns-1 sm:columns-2 lg:columns-3 row-auto gap-4 pt-2 pb-8">
          {data.map(function (post, index) {
            if (post.published == 'true')
              return <Post key={index} post={post} />;
          })}
        </div>

        <Footer />

        {/* </div>
        </div> */}
      </main>
    );
  };

  return (
    <>
      <BlogSEO
        title={
          "Jacob's Blue | Musician, Product Designer, Father, Forever Learner"
        }
        description="Pursuing mastery in music...probably cooking something."
        image="/siteThumb.png"
        canonical="/index"
      />
      {main()}
    </>
  );
}
