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
        <main className="hell">
        <JBHeader/>
            
            <div className="container md:pt-20 pt-4 pb-8">
            <div>
                <h1 className="text-2xl md:text-4xl pb-4 ">Site Archive</h1>
            </div>
            <div className="py-8 space-y-4 border-t border-black ">
                <ArchiveEntry href="https://web.archive.org/web/20220730230234/https://jacobs.blue/" label="Born in the Sunset Experience" year="2020" alt="born in the susnet website preview" src="/BITS.gif" />
            </div>
            </div>
        <Footer />
        </main>
    </React.Fragment>
    )
}