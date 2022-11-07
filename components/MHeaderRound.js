import React , {useState, useEffect, useCallback} from "react"
import Link from "next/link"
import { useScrollDirection } from "../src/utils/useScrollDirection"
import useReadingProgress from "../src/utils/useReadingProgress";
import Image from "next/image";

export default function MHeaderRound(props) {

  const blogTitle = props.title;
  const readingTime = props.rt;
    const completion = useReadingProgress();
    // const docHeight = useReadingProgress(docHeight);
    const scrollDirection = useScrollDirection;
    // console.log(completion)

    return (
        <div className="py-2 px-4 md:py-2 md:px-8  container-fg bg-white/90 sm:bg-white/80 backdrop-blur-sm z-40 sticky hover:drop-shadow-xl hover:bg-white transition-all duration-300 top-8 mt-8 border rounded-full border-neutral-200 border-solid">
              <div className="columns-3 flex justify-between space-x-12 md:space-x-24 lg:space-x-48 xl:space-x-96 items-center mt-0">
                <Link href="/meditations" passHref>
                  <h1 className="text-sm col-span-1 pl-2 md:pl-0 flex font-mono cursor-pointer text-neutral-500 hover:text-black">/Meditations</h1>
                </Link>
                <div className="col-span-1 flex-grow w-full block">
                  <div className="justify-center mx-auto w-full font-fruit text-2xl text-center lg:text-3xl pb-1 hidden md:flex">
                    <p
                    className="tracking-tighter">{blogTitle}</p>
                    {/* <p className="text-right tracking-tighter">{readingTime}</p> */}
                  </div>
                  <div className="overflow-hidden col-span-1 w-full justify-center align-middle  h-[.2em] bg-neutral-100 relative rounded-2xl items-center">
                    <span
                    style={{ width: `${completion}%`}}
                    className="bg-gradient-to-r  from-[#53ACEB] via-[#9EE1FF] to-[#54C6DF] h-[.2em] absolute bottom-0 bg-center rounded-full"
                    />
                  </div>
              </div>
                {/* <div className="w-96 flex-shrink h-2 mx-auto bg-slate-200 flex align-middle items-center self-middle rounded-full">
                  <span
                  style={{ width: `${completion}%`}}
                  className="bg-blue-500 h-1 m-1 transition-colors self-center rounded-full"
                  />
                </div> */}
                <Link href="/" passHref>
                  <div className="flex col-span-1 py-2 w-[68.55px] justify-end space-x-1 hover:italic hover:font-light  items-center cursor-pointer">
                    {/* <p>to main website</p>
                    <span className="material-icons text-sm">east</span> */}
                    <div className="border-white border-2 rounded-full relative p-4 cursor-pointer hover:drop-shadow-lg">
                      <Image
                        alt="blue gradient"
                        src="/logo.png"
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                  </div>
                  
                </Link>
              </div>
              
          </div>
    )
}