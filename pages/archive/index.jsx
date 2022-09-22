import ArchiveEntry from "../../components/ArchiveEntry";
import Footer from "../../components/Footer";
import Head from "next/head";
import React from "react";
import JBHeader from "../../components/JBHeader";


export default function Archive(){
    return(
        <React.Fragment>
            <Head>
                <title>Site Archive | Jacob&#39;s Blue</title>
            </Head>
        <main className="container-fg">
        <JBHeader/>
            <div className='mb-12'>
              <div className='mt-14 mb-20'>
                <h1 className='text-5xl font-mont tracking-tight'>Archive</h1>
              </div>
            <div className="flex lg:mb-0 mt-2 flex-col lg:gap-y-4 lg:grid lg:grid-flow-row lg:grid-cols-2 gap-x-8">
                <ArchiveEntry href="https://web.archive.org/web/20220730230234/https://jacobs.blue/" label="Born in the Sunset Experience" year="2020" alt="born in the susnet website preview" src="/BITS.gif" />
            </div>
            </div>
        <Footer />
        </main>
    </React.Fragment>
    )
}