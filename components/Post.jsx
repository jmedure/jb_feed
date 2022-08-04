import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import Image from 'next/image';
import YoutubeEmbed from './YoutubeEmbed';
import { data } from 'autoprefixer';
import BubbleLink from './BubbleLink';

export const Post = ({ post }) => {

  const {title, link, kind, description, image, youtubeEmbed, youtube, soundcloud, spotify, apple, amazon, tidal, } = post

  const extras = () => {
    if (kind === "video") {
      return (
        <div className="flex mt-4 flex-row justify-between items-end lg:pt-0">
          <div className="flex-grow flex-auto ">
              <div className="flex items-center justify-start justify-items-center flex-wrap">
                  <BubbleLink href={link} label="visit" mui="north_east"/>
              </div> 
         </div>

        <span className="sm:flex group-hover:visible sm:not-hidden material-icons text-right text-7xl md:text-8xl lg:text-9xl">north_east</span>
      </div>
    )
    }
    if (kind === "journal") {
      return (<p className="border p-2 ">journal</p>)
    }
    if (kind === "music") {
      return (
            <div className="flex mt-4 flex-row justify-between items-end lg:pt-0">
              <div className="flex-grow flex-auto ">
                  <div className="flex items-center justify-start justify-items-center flex-wrap">
                      <BubbleLink href={spotify} label="spotify" mui="north_east"/>
                      <BubbleLink href={apple} label="apple" mui="north_east"/>
                      <BubbleLink href={youtube} label="youtube" mui="north_east"/>
                      <BubbleLink href={soundcloud} label="soundcloud" mui="north_east"/>
                      <BubbleLink href={amazon} label="amazon" mui="north_east"/>
                      <BubbleLink href={tidal} label="tidal" mui="north_east"/>
                      <BubbleLink href={link} label="more..." mui=""/>
                  </div> 
             </div>

            <span className="invisible hidden sm:flex group-hover:visible sm:not-hidden material-icons text-right text-7xl md:text-8xl lg:text-9xl">east</span>
          </div>
  )
    }
    };
  
  
  return (
    <a href={link} className="group no-underline">
      <div className="p-4 mb-6 w-full hover:bg-neutral-100 border border-solid border-black">
      { image ?
        <div className='w-full mb-4 relative h-full overflow-hidden aspect-square border border-solid border-black sm:aspect-video'>
            <Image 
              src={image}
              alt="random"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL='https://jacobs.blue'
            />
            </div>
            :
            null
          }
        { youtubeEmbed ?
        <div className='w-full mb-4 relative h-full border border-solid border-black overflow-hidden sm:aspect-video'>
            <YoutubeEmbed
              embedId={youtubeEmbed}
            />
            </div>
            :
            null
          }
        <div className="flex justify-between items-start space-x-4">
          <h2 className="text-2xl sm:text-5xl leading-none tracking-tight sm:tracking-tighter">{title}</h2>
          <p className="py-0 px-2 sm:text-xl sm:mt-3 border border-black rounded-full items-center align-middle align-items-center md:text-2xl md:tracking-tight capitalize">{kind}</p>
        </div>

        { description ?
          <p className="text-neutral-800 truncate sm:text-2xl text-base md:text-3xl md:tracking-tight lg:text-4xl sm:py-4 md:py-6 lg:py-6 py-2">{ description }</p>
          :
          null
        }
        { extras() }
        
      </div>
    
    </a>
  )
      }

Post.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  kind: PropTypes.string,
  isPublished: PropTypes.bool,
  image: PropTypes.string,
  youtubeEmbed: PropTypes.string,
  youtube: PropTypes.string,
  spotify: PropTypes.string,
  apple: PropTypes.string,
  tidal: PropTypes.string,
  soundcloud: PropTypes.string
};

