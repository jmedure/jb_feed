/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import JBHeader from '../components/JBHeader'
import Footer from '../components/Footer'
import Link from 'next/link'


export default function tenPercent( ) {
    return (
      <main className="">
        <JBHeader/>
          <div className="mx-auto container flex-col pb-40 py-10 space-y-6">
            <h2 className="text-5xl leading-none pb-4 tracking-tighter font-serif italic border-b ">10%</h2>
            <div className='md:w-3/4 whitespace-pre-line space-y-4'>
            <p className=''>Jacob's Blue and any affiliated companies or money earning projects will donate 10% of revenue. Forever.</p>
            <p>If you're interested learning more about where these donations please reach out. In general, our donations contribute to protecting all forms of life, furthering the advancemetn of the human species and fighting the destruction of life.</p>
            </div>
            <div>
              <h3 className='font-medium text-neutral-500 '>Some of my favorite charitible organizations</h3>
              <ul>
                  <li className='list-disc list-inside'><Link href="https://effectivealtruism.org">Effective Altruism</Link></li>
                  <li className='list-disc list-inside'><Link href="https://teamtrees.org">Team Trees</Link></li>
                  <span className='material-icons text-9xl'>north</span>
              </ul>
            </div>
          </div>
        <Footer />
      </main>
    )
  }

