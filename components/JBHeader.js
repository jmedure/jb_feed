import React from "react"
import MainNav from "./MainNav"
import Image from "next/image"
import LinksContainer from "./LinksContainer"
import Link from "next/link"
import Subheader from "./Subheader"
// import { Main } from "next/document"

export default function JBHeader() {


    return (
        <div className="pt-4 pb-2 lg:my-2 w-full bg-white/90 backdrop-blur-sm z-40 sticky top-0">
            {/* <div className="container"> */}
            {/* <LinksContainer/> */}
            {/* <MainNav/> */}
            {/* <div className="relative w-full max-h-48 min-h-24 min-h-fit">
                {/* <Image 
                    src="/jb.svg" 
                    // height={122} 
                    // width={876}
                    layout="fill"
                    objectFit="fill"
                    alt="jb logo"
                /> */}
                {/* </div>  */}
            {/* <h1 className="pt-4 lg:text-[9.65rem] xl:text-[12rem] text-[3.65rem] sm:text-[6rem] md:text-[7.7rem] uppercase text-center tracking-tighter leading-none">Jacob&#39;s Blue</h1> */}
            <div className="container text-base flex justify-between w-full items-center grid-cols-3">
                <div className="col-span-1 ">
                    <Link href="/"><h1 className="pb-0 tracking-tight cursor-pointer text-xl leading-none">Jacob&#39;s Blue</h1></Link>
                    <Subheader/>
                </div>
                {/* <div className="col-span-1">
                    <MainNav/>
                </div> */}
                <div className="col-span-1">
                    <Link href="/links">
                        <div className="flex items-center text-base space-x-1 hover:italic hover:font-light cursor-pointer">
                            <p className="">all links</p>
                            <span className="material-icons text-sm">east</span>
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}