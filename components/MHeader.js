import React , {useState, useEffect} from "react"
import MainNav from "./MainNav"
import Image from "next/image"
import LinksContainer from "./LinksContainer"
import Subheader from "./Subheader"
import Link from "next/link"
import Button from "./Button"
import { useScrollDirection } from "../src/utils/useScrollDirection"


export default function JBHeader(props) {

    const scrollDirection = useScrollDirection;

    return (
        <div className={'sticky ${ scrollDirection === "down" ? "-top-28 md:-top-24" : "top-0"} flex col-span-3 tracking-tighter p-4 justify-between top-0 border-b border-solid border-neutral-200 bg-white/80 backdrop-blur-md z-10 items-center transition-all duration-500'}>
            {/* <MainNav/> */}
            <div className="flex items-center">
                <div className="relative w-12 h-12 p-8">
                    <Image
                    alt="blue gradient"
                    width={200}
                    height={200}
                    src="/logo.png"
                    objectFit="cover"
                    layout="fill" 
                    ></Image>
                </div>
                <div className="ml-4">
                    <Link href="/mediations-of-a-rockstar" className="cursor-pointer">
                        <h1 className="text-3xl cursor-pointer font-serif mx-auto w-96 font-base">meditations of a rockstar</h1>
                    </Link>
                    <Link href="/" className="cursor-pointer ">
                        <h2 className="text-xl cursor-pointer font-serif font-base w-40">by <strong className="font-sans font-light text-[1.2rem]">jacob&#39;s blue</strong></h2>
                    </Link>
                </div>    
            </div>
            <div className="">
                <Button href="./" type="left" copy="home" icon="west"  />
            </div>
            {/* <Subheader/> */}
            {/* <LinksContainer/> */}
        </div>
    )
}

