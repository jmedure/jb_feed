/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import JBHeader from '../components/JBHeader'
import { Post } from '../components/Post'
import useSWR from 'swr'
import MainNav from '../components/MainNav'
import Breadcrumbs from 'nextjs-breadcrumbs'
import Footer from '../components/Footer'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home( ) {
  
  const { data, error } = useSWR('/api/posts', fetcher)

  const main = () => {
    if (error) {
      return (<main>error: failed to load</main>)
    }
    if (!data) {
      return (<main>loading...</main>)
    }
    // let allPosts = data.filter(post,index)
    return (
      <main className=''>
        <JBHeader/>
          <div className="container ">
            <h2 className="text-[7.8rem] sm:text-[12rem] leading-none pb-2">Music</h2>
          </div>
        <MainNav/>
        <div className='container my-8 space-y-4'>
        
        { data.filter(function (posts) {
            return posts.kind === "music";
        }).map(function (post, index) {
            return <Post key={index} post={post}/>
          })}
        </div>
      <Footer />
      </main>
    )
  }

  return (
    <>
      <Head>
	      <title>Jacob's Blue</title>
      </Head>
      {main()}
    </>
  )
}
