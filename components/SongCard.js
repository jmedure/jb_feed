import Link from "next/link";
import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

export default function SongCard( props ) {

    const slug = props.slug
    const type = props.type
    const index = props.index
    const src = props.src
    const alt = props.alt
    const title = props.title
    const album = props.album
    const date = props.released
    const readingTime = props.readingTime
    const albumLink = props.albumLink
    const links = props.Links
    const description = props.description
    const trackNumber = props.trackNumber
    // const lastEdited = props.lastEdited

    const songType = () => {
        if (description == "") {
            return(
                <div>
                    <Link href={`/songs/${albumLink}`}>
                        <div className="flex items-center">
                            <a className="decoration-black text-base">
                                <p>Track {trackNumber} from {album}</p>
                            </a>
                        </div>
                    </Link>
                </div>
            )}
        else {
            return(
            <div>
                <p>{description}</p>
            </div>
        )}
            
    }   
    
    return(
        <Link href={`/songs/${slug}`} key={index} passHref>
            <div className='items-center font-mont p-4 w-full lg:flex-col flex space-x-4 lg:space-x-0 align-top cursor-pointer tracking-normal group sm:hover:bg-blue-200  bg-blue-50 rounded-xl lg:rounded-2xl lg:space-y-4 transition-all'>
                <div className="relative h-full w-20 sm:w-24 lg:w-full aspect-square rounded-xl overflow-hidden transition-all">
                    <Image 
                        src={src}
                        alt={alt}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL='https://jacobs.blue'
                        />
                </div>
                <div className="flex flex-row items-center lg:items-end w-full lg:space-x-2">
                    <div className="flex flex-col lg:flex-grow flex-grow lg:h-24">      
                        <h1 className="text-xl flex-1 md:text-3xl font-medium tracking-tighter leading-tight mb-1">{title}</h1>
                        <div className="flex space-x-1 lg:space-x-0 flex-row lg:flex-col align-middle">
                            { album ? 
                                <p className="hidden xl:block">{album}</p>
                                : null
                            }
                            <p className="text-neutral-500 pr-4">{dayjs(date).format("YYYY")}</p>
                        </div>
                    </div>
                    <div className="flex-col flex flex-shrink items-center lg:items-end">
                        <span className="material-icons text-3xl">east</span>
                    </div>
                </div>
            </div>
        </Link>

    )
}