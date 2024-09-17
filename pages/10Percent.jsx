/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import JBHeader from '../components/JBHeader'
import Footer from '../components/Footer'
import Link from 'next/link'


export default function tenPercent( ) {
    return (
      <main className="container">
        <JBHeader/>
          <div className="mx-auto flex-col pt-24 pb-40 space-y-6 font-mont text-xl">
            {/* <h2 className="text-5xl leading-none pb-4 tracking-tighter ">10%</h2> */}
            <div className='md:w-3/4 whitespace-pre-line space-y-4'>
            <p className=''>Jacob's Blue and any affiliated companies or money earning projects will donate 10% of revenue. Forever.</p>
            <p>If you're interested learning more about where these donations go please reach out. In general my donations contribute to protecting life and/or fighting the destruction of life.</p>
            </div>
            <div>
              <h3 className='font-medium '>Some of my favorite charitible organizations</h3>
              <ul>
                  <li className='list-disc list-inside'><a href="https://effectivealtruism.org" target="_blank" rel="noreferrer">Effective Altruism</a></li>
                  <li className='list-disc list-inside'><a href="https://givingwhatwecan.org" target="_blank" rel="noreferrer">Giving What We Can</a></li>
                  <li className='list-disc list-inside'><a href="https://teamtrees.org" target="_blank" rel="noreferrer">Team Trees</a></li>
                  {/* <span className='material-icons text-9xl'>north</span> */}
              </ul>
            </div>
          </div>
        <Footer />
      </main>
    )
  }

