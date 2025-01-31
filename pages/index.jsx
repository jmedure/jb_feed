import PostsPage from '../components/PostsPage';

export default function Home() {
  const seo = {
    title: "Jacob's Blue",
    description:
      "Pursuing mastery in music...probably cooking something. Musician, Product Designer, Father, Forever Learner. Jacob's Blue is Jacob Medure",
    image: '/siteThumb.png',
    canonical: 'https://jacobs.blue',
  };

  return <PostsPage pageTitle="Jacob's Blue" kind="all" seo={seo} />;
}
