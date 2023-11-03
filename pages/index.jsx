/* eslint-disable react/no-unescaped-entities */
import MainHeader from '../components/MainHeader';
import { Post } from '../components/cards/Post';
import useSWR from 'swr';
import Footer from '../components/Footer';
import BlogSEO from '../components/BlogSEO';
import MasonryWrapper from '../components/wrappers/MasonryWrapper';
import { motion } from 'framer-motion';
import Subheader from '../components/Subheader';

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
          {/* <p className="text-xl"> */}
          <Subheader />
          {/* </p> */}
        </main>
      );
    }
    // let allPosts = data.filter(post,index)
    return (
      <main className="">
        <MainHeader />
        <MasonryWrapper>
          {data.map(function (post, index) {
            if (post.published == 'true')
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
                  key={index}
                  className="list-none"
                >
                  <Post post={post} />
                </motion.li>
              );
          })}
          {/* </MainGridWrapper> */}
        </MasonryWrapper>
        <Footer />
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
