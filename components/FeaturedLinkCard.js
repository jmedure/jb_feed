import React from "react"
import {faDiscord, faYoutube, faApple, faInstagram, faTwitter, faTiktok, faSpotify, faSoundcloud, faDeezer, faAmazon, faNapster, faTwitch, faPatreon, faFigma, faGithub,} from '@fortawesome/free-brands-svg-icons'
import { faCupTogo } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import BubbleLink from "./BubbleLink";


export default function FeaturedLinkCard( props ) {

    if(props.type == "video") {

        return (
            <Link passHref href={props.href} className="hover:cursor-pointer">
                <div className="space-y-4 card border border-solid border-black p-4 hover:cursor-pointer hover:bg-neutral-100">
                    <div className="flex flex-row items-baseline w-full justify-between relative">
                        <Tag type={props.tag}/>
                        <p>new</p>
                        <p className="py-0 px-2 border border-black rounded-full items-center md:text-2xl md:tracking-tight">{props.type}</p>
                    </div>
                    <div className='w-full border border-solid border-black relative h-full overflow-hidden aspect-video mb-4'>
                        <Image 
                        src={props.image}
                        alt="random"
                        // width={500}
                        // height={500}
                        layout="fill"
                        objectFit="cover"
                        // placeholder="blur"
                        blurDataURL='https://jacobs.blue'
                        />
                    </div>
                    <div className="flex w-full flex-row jusitfy-between">
                        <div className="flex flex-col flex-grow basis-1/2 justify-items-start">
                            <FontAwesomeIcon icon={props.icon} className=" left-0"/>
                            <h2>{props.label}</h2>
                            <p className="p">{props.description}</p>
                        </div>
    
                        <span className="material-icons text-right text-8xl basis-1/2">north_east</span>
                    </div>
                </div>
            </Link>
        )
        
    }
    if(props.type == "song") {

        return (
            <Link passHref href={props.href} className="hover:cursor-pointer">
                <div className="space-y-2 md:space-y-8 group card border border-solid border-black p-4  bg-white hover:cursor-pointer hover:bg-neutral-100">
                    <div className="flex flex-row items-baseline w-full justify-between relative">
                        <Tag type={props.tag}/>
                        <p className="">new</p>
                        <p className="py-0 px-2 md:px-4 md:py-1 border border-black rounded-full items-center md:text-2xl md:tracking-tight">{props.type}</p>
                    </div>
                    <div className="flex w-full flex-col sm:flex-col md:flex-row jusitfy-between space-y-3 sm:space-y-4 space-x-0 sm:space-x-0 md:space-x-8 lg:space-x-10 items-center">
                        <div className='w-1/2 border border-solid border-black  relative h-full mr-auto overflow-hidden basis-1/2 aspect-square'>
                            <Image 
                            src={props.image}
                            alt="random"
                            // width={500}
                            // height={500}
                            layout="fill"
                            objectFit="cover"
                            // placeholder="blur"
                            blurDataURL='https://jacobs.blue'
                            />
                        </div>
                        <div className="flex-col  w-full basis-1/2 text-left space-y-0">
                            <p className="text-neutral-600 text-sm lg:text-lg lg:tracking-tight"></p>
                            <h2 className="text-3xl sm:text-5xl md:text-7xl md:pb-4 lg:text-8xl lg:pb-8 pt-2 pb-2 leading-none tracking-tighter">{props.label}</h2>
                            <p className="sm:text-xl md:text-2xl md:tracking-tight lg:text-4xl">by Jacob&#39;s Blue</p>
                            <p className="text-xl">{props.description}</p>

                        </div>
                            
                        </div>
                            <div className="flex flex-row justify-between items-end pt-2 md:pt-0 lg:pt-0">
                                <div className="flex-grow flex-auto ">
                                    <div className="flex items-center justify-start justify-items-center flex-wrap">
                                        <BubbleLink href="https://spotify.com" label="spotify" mui="north_east"/>
                                        <BubbleLink href="https://spotify.com" label="apple" mui="north_east"/>
                                        <BubbleLink href="https://spotify.com" label="youtube" mui="north_east"/>
                                        <BubbleLink href="https://spotify.com" label="soundcloud" mui="north_east"/>
                                        <BubbleLink href="https://spotify.com" label="amazon" mui="north_east"/>
                                        <BubbleLink href="https://spotify.com" label="tidal" mui="north_east"/>
                                        <BubbleLink href="https://spotify.com" label="more..." mui=""/>
                                    </div> 
                                </div>
        
                                <span className="invisible hidden sm:flex group-hover:visible sm:not-hidden material-icons text-right text-7xl md:text-8xl lg:text-9xl">north_east</span>
                            </div>
                </div>
            </Link>
        )
        
    }

    return (
        <div></div>
    )
}
