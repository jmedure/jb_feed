import React from 'react'
import Head from 'next/head'
import { getAllPages } from '../../src/utils/mdx_misc'
import MHeader from '../../components/MHeader'
import PageEntry from '../../components/PageEntry'
import Link from 'next/link'
import Image from "next/legacy/image"

export default function Blog( { posts } ) {

    return (
      <React.Fragment>
        <Head>
            <title>Jacob&#39;s Blue | Misc</title>
        </Head>
        
        <div className=''>
           {/* <MHeader/> */}
           <div className='container font-serif'>

            {/* <div className='font-sans font-medium text-2xl pt-16 justify-left tracking-tighter'>
              <h1><i className='font-serif text-3xl'>misc</i> pages</h1>
            </div> */}
            <div className="flex sticky top-0 p-4 bg-white align-middle justify-center mt-16 md:mt-8 transition-all hover:text-blue-500">
            <Link href="/" passHref legacyBehavior>
          <div className="flex col-span-1 py-2 justify-end space-x-1 items-center hover:drop-shadow-xl transition-all duration-200 cursor-pointer">
            <div className="border-white border-2 rounded-full relative p-5 cursor-pointer">
              <Image
                alt="blue gradient"
                src="/logo.png"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />
            </div>
          </div>
        </Link>
      </div>
            <h3 className='text-3xl py-24 tracking-tight'><i className='tracking-tighter'>misc.</i> pages</h3>

            <div className='w-full space-y-6 md:space-y-8 justify-between'>
                {posts.map((frontMatter, index) => {
                
                  return (
                      <PageEntry 
                          slug={frontMatter.slug} 
                          key={index}
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
    );
}


export async function getStaticProps() {
  
  let articles = await getAllPages()

  const sortedPages = articles.map((article) => article)

  sortedPages.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  return {
    props: {
      posts: sortedPages,
    },
  }

}