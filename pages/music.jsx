/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/legacy/image';
import JBHeader from '../components/JBHeader';
import { Post } from '../components/Post';
import useSWR from 'swr';
import MainNav from '../components/MainNav';
import Breadcrumbs from 'nextjs-breadcrumbs';
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
        <div className="flex-wrap bg-white/90 backdrop-blur-sm z-40 sticky top-0">
          <JBHeader />
          <MainNav />
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 row-auto gap-4 pt-2 pb-8">
          {data
            .filter(function (posts) {
              return posts.kind === 'music' && posts.published == 'true';
            })
            .map(function (post, index) {
              return <Post key={index} post={post} />;
            })}
        </div>
        {/* (frontMatter.published=="true") && */}
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
