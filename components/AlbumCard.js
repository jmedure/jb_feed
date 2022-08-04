import Link from "next/link";
import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

export default function AlbumCard( props ) {

    const slug = props.slug
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
            <div className='flex snap-start w-full flex-col space-y-4 align-top cursor-pointer tracking-normal '>
                <div className="relative border-solid border border-black aspect-square">
                    <Image 
                        src={src}
                        alt={alt}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL='https://jacobs.blue'
                        />
                </div>
                <div className="flex-col w-60 col-span-full flex justify-between sm:w-full">      
                    <div className='flex-grow flex justify-between w-full'>
                        <h1 className="text-2xl font-sans font-medium tracking-tighter leading-tight mb-1">{title}</h1>
                        <span className="material-icons text-3xl">east</span>
                    </div>
                        <div className="flex space-x-4 flex-row align-middle">
                            <p>{dayjs(date).format("YYYY")}</p>
                        </div>
                </div>
            </div>
        </Link>

    )
}