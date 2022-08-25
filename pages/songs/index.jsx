import React from 'react'
import Head from 'next/head'
import { getAllArticles } from '../../src/utils/mdx_songs'
import SongCard from '../../components/SongCard'
import Footer from '../../components/Footer'
import AlbumCard from '../../components/AlbumCard'
import JBHeader from '../../components/JBHeader'

export default function Blog( { posts } ) {

    return(
        
        <React.Fragment>
          <Head>
              <title>Songs | Jacob&#39;s Blue</title>
          </Head>
          
          <div className='container-fg'>
          <JBHeader/>
             
             <div className='mb-12'>
              <div className='mt-14 mb-20'>
                <h1 className='text-5xl font-mont tracking-tight'>Songs</h1>
                {/* <p className='text-xl pt-2'>Lyrics, credits, and more.</p> */}
              </div>

              <div className='my-8 space-y-4 lg:space-y-0 lg:rounded-[3em] lg:gap-y-4 lg:grid lg:grid-flow-row md:grid-cols-2  lg:grid-cols-4 gap-x-8'>
                  {posts.map((frontMatter, index) => {
                    if ((frontMatter.published=="true") && (frontMatter.type != "album" )){
                    return (
                        <SongCard
                            slug={frontMatter.slug} 
                            type={frontMatter.type}
                            key={index}
                            passHref 
                            src={frontMatter.artwork} 
                            alt={frontMatter.alt} 
                            title={frontMatter.title} 
                            album={frontMatter.album} 
                            released={frontMatter.released} 
                            readingTime={frontMatter.readingTime}
                            albumLink={frontMatter.albumLink}
                            description={frontMatter.description}
                            trackNumber={frontMatter.track}
                            spotifyEmbed={frontMatter.spotifyEmbed}
                        />
                      )
                    }})}
              </div>
              {/* <div className='my-4'>
                <div className='flex justify-between items-center'>
                  <h3 className='text-2xl my-2 pt-2 tracking-tight'>Albums</h3>
                  <div className='flex items-center space-x-2'>
                    <span className='material-icons'>chevron_left</span>
                    <span className='material-icons'>chevron_right</span>
                  </div>
                </div>
                  <div className='flex border-t border-solid border-black py-4 overflow-x-auto scroll-m-6 snap-x snap-mandatory space-x-4'>
                  {posts.map((frontMatter, index) => {
                    if ((frontMatter.published=="true") && (frontMatter.type == "album")){
                    return (
                        <AlbumCard
                            slug={frontMatter.slug} 
                            type={frontMatter.type}
                            key={index}
                            passHref 
                            src={frontMatter.artwork} 
                            alt={frontMatter.alt} 
                            title={frontMatter.title} 
                            album={frontMatter.album} 
                            released={frontMatter.released} 
                            readingTime={frontMatter.readingTime}
                            albumLink={frontMatter.albumLink}
                            description={frontMatter.description}
                            trackNumber={frontMatter.track}
                            spotifyEmbed={frontMatter.spotifyEmbed}
                        />
                      )
                    }})}
                  </div>
              </div> */}
            </div>
            <Footer /> 
        </div>
                 
      </React.Fragment>
      
    )
}


export async function getStaticProps() {
  
  let articles = await getAllArticles()

  const sortedArticles = articles.map((article) => article)

  sortedArticles.sort((a, b) => {
    return new Date(b.released) - new Date(a.released)
  })

  return {
    props: {
      posts: sortedArticles,
    },
  }

}