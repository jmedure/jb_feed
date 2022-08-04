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
             <MHeader/>
             <div className='container font-serif'>

              <div className='font-sans font-medium text-7xl p-16 justify-center text-center tracking-tighter'>
                <h1>tomorrow is <i className='font-serif text-[5.4rem]'>not</i> guranteed</h1>
              </div>

              <h3 className='text-3xl mb-4 tracking-tight'></h3>

              <div className='container py-8'>
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