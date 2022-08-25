/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import JBHeader from '../components/JBHeader';
import { Post } from '../components/Post';
import useSWR from 'swr';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

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
      <main className="container-fg">
        {/* <div className="bg-cover home bg-scroll bg-center mt-0">
          <div className="bg-gradient-to-t from-white"> */}
            <JBHeader />
            {/* <div className="container ">
              <h2 className="text-[7.8rem] sm:text-[12rem] text-white leading-none pb-2">
                Video
              </h2>
            </div> */}
            <MainNav />
            <div className="flex mb-8 lg:mb-0 mt-2 flex-col lg:gap-y-4 lg:grid lg:grid-flow-row lg:grid-cols-2 gap-x-8">
              {data
                .filter(function (posts) {
                  return posts.kind === 'video';
                })
                .map(function (post, index) {
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
      <Head>
        <title>Jacob's Blue</title>
      </Head>
      {main()}
    </>
  );
}
