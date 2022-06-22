/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// import Image from 'next/image'
import { Post } from '../components/Post'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/posts', fetcher)

  const main = () => {
    if (error) {
      return (<main>failed to load</main>)
    }
    if (!data) {
      return (<main>loading...</main>)
    }
    return (
      <main>
        { data.map((post, index) => (
          <Post key={index} post={post} />
        ))
        }
        
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
