import React from 'react'
import Head from 'next/head'
import { getAllArticles } from '../../src/utils/mdx_med'
import MHeader from '../../components/MHeader'
import BlogEntry from '../../components/BlogEntry'

export default function Blog( { posts } ) {

    return(
        
        <React.Fragment>
          <Head>
              <title>Meditations of a Rockstar | Jacob&#39;s Blue</title>
          </Head>
          
          <div className=''>
            
             {/* <MHeader/> */}
             <div className=' font-serif'>

              <div className='font-fruit pt-56 items-center text-center container'>
                <h1 className='text-8xl tracking-tighter'>Meditations of a <i className='tracking-tight'>Rockstar</i></h1>
                <p className=' font-sans text-2xl tracking-tighter'>by Jacob&#39;s Blue</p>
                <div className='items-center text-center justify-center'>
                  <span className='material-icons'>keyboard_arrow_down_sharp</span>
                </div>
              </div>
              

              <h3 className='text-3xl mb-4 tracking-tight'></h3>

              <div className='container py-8'>
                <div className='font-fruit tracking-tight py-4 border-b border-solid'>
                  <h2 className='text-4xl italic'>Entries <sup className='text-lg text-neutral-400'>({posts.length})</sup></h2>
                </div>
                  {posts.map((frontMatter, index) => {
                    
                    return (
                        <BlogEntry 
                            slug={frontMatter.slug} 
                            key={index}
                            passHref 
                            src={frontMatter.image} 
                            alt={frontMatter.alt} 
                            title={frontMatter.title} 
                            description={frontMatter.description}
                            date={frontMatter.date} 
                            lastEdited={frontMatter.lastEdited}
                            readingTime={frontMatter.readingTime}
                        />
                      )
                    })}
              </div>
            </div>
        </div>

      </React.Fragment>
    )
}


export async function getStaticProps() {
  
  let articles = await getAllArticles()

  const sortedArticles = articles.map((article) => article)

  sortedArticles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  return {
    props: {
      posts: sortedArticles,
    },
  }

}