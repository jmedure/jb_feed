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
          
          <div className=''>
          <JBHeader/>
             
             <div className='container'>

              <h1 className='text-4xl mt-4 pt-4 tracking-tight'>All Songs</h1>

              <div className='my-4 divide-y border-black border-solid border-t divide-neutral-300'>
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
              <div className='my-4'>
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
              </div>
            </div>
        </div>
      <Footer />            
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