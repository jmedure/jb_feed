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
        if (description == " ") {
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
            <div className='items-center py-4 w-full flex space-x-4 align-top cursor-pointer tracking-normal group '>
                <div className="relative h-full w-16 aspect-square rounded-xl overflow-hidden group-hover:drop-shadow-lg transition-all">
                    <Image 
                        src={src}
                        alt={alt}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL='https://jacobs.blue'
                        />
                </div>
                <div className="flex-col col-span-full flex justify-between flex-1">      
                    <div className='flex-grow'>
                        <h1 className="text-2xl font-sans font-medium tracking-tighter leading-tight mb-1">{title}</h1>
                    </div>
                        <div className="flex space-x-1 flex-row align-middle">
                            { album ? 
                                <p>{album} -</p>
                                : null
                            }
                            <p className="text-neutral-500">{dayjs(date).format("YYYY")}</p>
                        </div>
                    
                </div>
                <div className="flex-col flex flex-shrink h-full items-center">
                    <span className="material-icons text-3xl">east</span>
                </div>
            </div>
        </Link>

    )
}