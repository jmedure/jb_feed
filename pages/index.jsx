/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/legacy/image';
import JBHeader from '../components/JBHeader';
import { Post } from '../components/Post';
import useSWR from 'swr';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import HeadSeo from '../components/HeadSEO';
import siteMetadata from '../data/siteMetadata';
import BlogSEO from '../components/BlogSEO';
import { motion } from 'framer-motion';
import {
  faDiscord,
  faYoutube,
  faApple,
  faInstagram,
  faTwitter,
  faTiktok,
  faSpotify,
  faSoundcloud,
  faDeezer,
  faNapster,
  faTwitch,
  faPatreon,
  faFigma,
  faGithub,
  faBehance,
  faDribbble,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

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
          {/* <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin duration-150"
          >
            <path
              d="M33.8827 29.1578C39.4852 20.9458 37.3699 9.74689 29.1578 4.14433C20.9458 -1.45823 9.7469 0.657148 4.14434 8.86917C-1.45823 17.0812 0.657157 28.2801 8.86918 33.8827C17.0812 39.4852 28.2801 37.3699 33.8827 29.1578ZM7.41025 11.0973C11.7822 4.689 20.5214 3.03824 26.9297 7.41024C33.338 11.7822 34.9888 20.5214 30.6168 26.9297C26.2448 33.338 17.5056 34.9888 11.0973 30.6168C4.689 26.2448 3.03825 17.5056 7.41025 11.0973Z"
              fill="#EEEEEE"
              fill-opacity="0.5"
            />
            <path
              d="M32.4864 27.6875C33.4041 28.2784 34.638 28.0172 35.1248 27.0402C36.6068 24.0656 37.2422 20.7258 36.9402 17.3904C36.5785 13.3962 34.8933 9.63716 32.152 6.7098C29.4106 3.78244 25.7701 1.85445 21.8082 1.23178C17.8463 0.609101 13.7899 1.32741 10.2827 3.27271C6.77549 5.21802 4.01843 8.27889 2.44899 11.9696C0.879545 15.6603 0.587633 19.7695 1.61957 23.645C2.65151 27.5205 4.94818 30.9404 8.14515 33.362C10.8148 35.3841 13.9844 36.6134 17.2925 36.9311C18.3791 37.0354 19.254 36.1269 19.2386 35.0355V35.0355C19.2233 33.9441 18.3219 33.0861 17.2392 32.9482C14.8139 32.6394 12.4989 31.701 10.5318 30.211C8.03693 28.3213 6.2446 25.6524 5.43928 22.6279C4.63396 19.6035 4.86177 16.3967 6.08656 13.5164C7.31135 10.6362 9.46296 8.24751 12.2 6.72939C14.937 5.21128 18.1026 4.65071 21.1945 5.13664C24.2864 5.62258 27.1274 7.12718 29.2668 9.4117C31.4061 11.6962 32.7213 14.6298 33.0035 17.7468C33.226 20.2044 32.7964 22.6651 31.7743 24.8861C31.3179 25.8777 31.5686 27.0966 32.4864 27.6875V27.6875Z"
              fill="url(#paint0_linear_1663_7798)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1663_7798"
                x1="21.5"
                y1="2"
                x2="19"
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BBEEFF" />
                <stop offset="0.369792" stop-color="#56D5FF" />
                <stop offset="0.677083" stop-color="#2FB1F2" />
                <stop offset="1" stop-color="#013A4F" />
              </linearGradient>
            </defs>
          </svg> */}

          <p className="text-xl">Loading...</p>
        </main>
      );
    }
    // let allPosts = data.filter(post,index)
    return (
      <main className="container-fg">
        <div className="flex-wrap bg-white/90 backdrop-blur-sm z-40 sticky top-0">
          <JBHeader />
          <MainNav />
        </div>
        <motion.div
          // transition={0.4}
          initial={{ opacity: 0 }}
          transition={{ staggerChildren: 0.5 }}
          animate={{ opacity: 1 }}
          className="flex my-2 flex-col lg:gap-y-2 lg:grid lg:grid-flow-row lg:grid-cols-2 gap-x-4"
        >
          {data.map(function (post, index) {
            if (post.published == 'true')
              return <Post key={index} post={post} />;
          })}
        </motion.div>

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
          "Jacob's Blue | All things artist, songwriter and producer Jacob's Blue"
        }
        description="Pursuing mastery in music...probably cooking something."
        image="/siteThumb.png"
        canonical="/index"
      />
      {main()}
    </>
  );
}
