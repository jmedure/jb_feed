/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import JBHeader from '../components/JBHeader';
import { Post } from '../components/Post';
import useSWR from 'swr';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import HeadSeo from '../components/HeadSEO';
import siteMetadata from '../data/siteMetadata';

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
        <div className="bg-cover home bg-scroll bg-center mt-0">
          <div className="bg-gradient-to-t from-white">
            <JBHeader />
            <div className="container">
              <h2 className="text-[7.8rem] sm:text-[12rem] text-white leading-none pb-2 tracking-tight">
                All
              </h2>
            </div>
            <MainNav />
            <div className="mb-8 mt-2 space-y-4 container">
              {data.map(function (post, index) {
                if (post.published == 'true')
                  return <Post key={index} post={post} />;
              })}
            </div>
            <Footer />
          </div>
        </div>
      </main>
    );
  };

  return (
    <>
      <HeadSeo
        title="Jacob's Blue | Home"
        description="Pursuing mastery in music...probably cooking something."
        canonical="/index"
        image="logo.png"
      />
      {main()}
    </>
  );
}
