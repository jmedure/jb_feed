import React , {useState, useEffect} from "react"
import Link from "next/link"
import { useScrollDirection } from "../src/utils/useScrollDirection"


export default function JBHeader(props) {

    const scrollDirection = useScrollDirection;

    return (
        <div className={'sticky ${ scrollDirection === "down" ? "-top-28 md:-top-24" : "top-0"} flex col-span-3 tracking-tighter p-4 justify-between top-0 border-b border-solid border-neutral-200 bg-white/80 backdrop-blur-md z-10 items-center transition-all duration-500'}>
           <div className="w-full container flex justify-between items-center">
          <h1 className="text-xl flex">Links</h1>
          <Link href="/" passHref>
            <div className="flex py-2 space-x-1 hover:italic hover:font-light items-center cursor-pointer">
              <p>to main website</p>
              <span className="material-icons text-sm">east</span>
            </div>
          </Link>
        </div>
      </div>
    )
}

