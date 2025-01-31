import Head from 'next/head';
import MainHeader from './MainHeader';
import Footer from './Footer';
import BlogSEO from './BlogSEO';
import PostsList from './PostsList';

export default function PostsPage({ pageTitle, kind, seo }) {
  return (
    <>
      {seo ? (
        <BlogSEO
          title={seo.title}
          description={seo.description}
          image={seo.image}
          canonical={seo.canonical}
        />
      ) : (
        <Head>
          <title>{pageTitle}</title>
        </Head>
      )}
      <MainHeader />
      <main className="">
        <PostsList kind={kind} />
      </main>
      <Footer />
    </>
  );
}
