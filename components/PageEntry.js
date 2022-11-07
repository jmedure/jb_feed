import Link from "next/link";
import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

export default function PageEntry( props ) {

    const slug = props.slug
    const index = props.index
    // const src = props.src
    // const alt = props.alt
    const title = props.title
    // const description = props.description
    const date = props.date
    const readingTime = props.readingTime
    // const lastEdited = props.lastEdited
    
    return(
        <Link href={`/misc/${slug}`} key={index} passHref>
            <div className="flex group p-6 space-x-4 bg-white flex-row w-full items-center justify-between cursor-pointer tracking-normal border border-solid border-neutral-300 rounded-md hover:relative transition-all duration-200 hover:border-black hover:drop-shadow-lg">
                <h1 className="text-xl font-serif tracking-tight font-light md:not-italic  leading-tight">
                    {title}
                </h1>
                {/* <div className='space-x-8 font-mono flex-grow w-24 justify-end text-right flex-nowrap text-sm'>
                
    <p>{dayjs(date).format("MMM YY")}</p> */}
                <div className="flex-col flex flex-shrink h-fill justify-items-end items-center">
                    <span className="material-icons text-right h-auto text-2xl border-2 px-2 text-neutral-900 border-neutral-200/0 border-solid">east</span>
                </div>
            </div>
        </Link>
    )
}