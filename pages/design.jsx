/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import MainHeader from '../components/MainHeader';
import { Post } from '../components/Post';
import useSWR from 'swr';
import Footer from '../components/Footer';
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
              return posts.kind === 'design' && posts.published == 'true';
            })
            .map(function (post, index) {
              return <Post key={index} post={post} />;
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