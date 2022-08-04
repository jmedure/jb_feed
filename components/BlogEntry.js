import Link from "next/link";
import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

export default function BlogEntry( props ) {

    const slug = props.slug
    const index = props.index
    const src = props.src
    const alt = props.alt
    const title = props.title
    const description = props.description
    const date = props.date
    const readingTime = props.readingTime
    // const lastEdited = props.lastEdited
    
    return(
        <Link href={`/meditations-of-a-rockstar/${slug}`} key={index} passHref>
            <div className='p-4 blogEntry flex space-x-8 align-top cursor-pointer font-serif tracking-normal hover:bg-neutral-100 relative'>
                <div className="relative w-48 h-32 m-h-full border-solid border-neutral-300 border">
                    <Image 
                        src={src}
                        alt={alt}
                        // width={500}
                        // height={500}
                        layout="fill"
                        objectFit="cover"
                        // placeholder="blur"
                        blurDataURL='https://jacobs.blue'
                        />
                </div>
                <div className="flex-col col-span-full flex justify-between flex-1">      
                    <div className='flex-grow'>
                        <h1 className="text-2xl font-sans font-medium tracking-tighter leading-tight mb-1">{title}</h1>
                        <p className="text-neutral-600 text-base font-sans font-normal tracking-tight">{description}</p>
                        {/* <span className="material-icons text-med border-2 py-1 px-2 text-neutral-400 border-neutral-200 border-solid hover:border-solid  hover:text-neutral-500 hover:border-2 hover:border-neutral-500 rounded-sm transition-all ">ios_share</span> */}
                    </div>
                    <div className="text-neutral-500 flex font-sans justify-between">
                        {/* <p>Published {dayjs(date).format("MMMM D, YYYY")}</p> */}
                        <div className="flex space-x-4 flex-row align-middle">
                            <p>{dayjs(date).format("MMMM DD, YYYY")}</p>
                            <p className="">{readingTime}</p>
                            {/* <span className="material-icons text-xl border-2 px-2 text-neutral-400 border-neutral-200/0 border-solid hover:border-solid  hover:text-neutral-400 hover:border-2 hover:border-neutral-400 rounded-md transition-all ">ios_share</span> */}
                        </div>
                    </div>
                    
                </div>
                <div className="flex-col flex flex-shrink h-filljustify-items-end items-center">
                    <div className="flex-row">
                        <span className="material-icons text-right h-auto text-xl border-2 px-2 text-neutral-400 border-neutral-200/0 border-solid hover:border-solid  hover:text-neutral-400 hover:border-2 hover:border-neutral-400 rounded-md transition-all ">ios_share</span>
                    </div>
                </div>
            </div>
        </Link>

    )
}