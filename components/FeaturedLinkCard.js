import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import Tag from './Tag';
import BubbleLink from './BubbleLink';
import YoutubeEmbed from './YoutubeEmbed';

export default function FeaturedLinkCard(props) {
  if (props.type == 'video') {
    return (
      <Link passHref href={props.href} className="hover:cursor-pointer">
        <div className="space-y-2 md:space-y-8 group card border border-solid border-black p-4 bg-white/20 backdrop-blur hover:cursor-pointer hover:bg-white/50 rounded-2xl hover:drop-shadow-2xl">
          <div className="flex flex-row items-baseline w-full justify-between relative  md:pb-0">
            <Tag type={props.tag} />
            <p className="">new</p>
            <p className="py-0 px-2 sm:text-xl sm:mt-3 border border-black rounded-full items-center align-middle align-items-center md:text-2xl md:tracking-tight capitalize">
              {props.type}
            </p>
          </div>
          <div className="flex w-full flex-col sm:flex-col jusitfy-between  sm:space-y-4 space-x-0  items-center">
            <div className="flex lg:w-full w-full border border-solid border-black rounded-xl relative h-full lg:mr-auto overflow-clip lg:basis-1/2 aspect-square md:aspect-video">
              <YoutubeEmbed embedId={props.youtubeEmbed} />
            </div>
            <div className="flex-col w-full basis-1/2 text-left space-y-0 font-mont">
              {/* <p className="text-neutral-600 text-sm lg:text-lg lg:tracking-tight">test</p> */}
              <h2 className="text-3xl sm:text-5xl md:text-7xl md:pb-4 lg:text-7xl lg:pb-4 py-2 leading-none tracking-tighter">
                {props.label}
              </h2>
              <p className="text-xl">{props.description}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-end pt-2 md:pt-0 lg:pt-0">
            <div className="flex-grow flex-auto ">
              <div className="flex items-center justify-start justify-items-center flex-wrap">
                <BubbleLink
                  href={props.href}
                  label="watch now"
                  mui="north_east"
                />
              </div>
            </div>

            <span className="sm:flex group-hover:visible sm:not-hidden material-icons text-right text-7xl md:text-8xl lg:text-9xl">
              north_east
            </span>
          </div>
        </div>
      </Link>
    );
  }
  if (props.type == 'music') {
    return (
      <Link passHref href={props.href} className="hover:cursor-pointer">
        <div className="space-y-2 md:space-y-8 group card border border-solid border-black p-4 bg-white/20 backdrop-blur hover:cursor-pointer hover:bg-white/50 rounded-2xl hover:drop-shadow-2xl">
          <div className="flex flex-row items-baseline w-full justify-between relative pb-2">
            <Tag type={props.tag} />
            <p className="">new</p>
            <p className="py-0 px-2 sm:text-xl sm:mt-3 border border-black rounded-full items-center align-middle align-items-center md:text-2xl md:tracking-tight capitalize">
              {props.type}
            </p>
          </div>
          <div className="flex w-full flex-col sm:flex-col md:flex-row jusitfy-between space-y-3 sm:space-y-4 space-x-0 sm:space-x-0 md:space-x-8 lg:space-x-10 items-center">
            <div className="flex lg:w-1/2 w-full border border-solid border-black rounded-xl relative h-full lg:mr-auto overflow-clip lg:basis-1/2 aspect-square">
              <Image
                src={props.image}
                alt={props.alt}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="https://jacobs.blue"
              />
            </div>
            <div className="flex-col w-full basis-1/2 text-left space-y-0 font-mont">
              <p className="text-neutral-600 text-sm lg:text-lg lg:tracking-tight"></p>
              <h2 className="text-3xl sm:text-5xl md:text-7xl md:pb-4 lg:text-8xl lg:pb-8 pt-2 pb-2 leading-none tracking-tighter">
                {props.label}
              </h2>
              <p className="sm:text-xl md:text-2xl md:tracking-tight lg:text-4xl">
                by Jacob&#39;s Blue
              </p>
              <p className="text-xl">{props.description}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-end pt-2 md:pt-0 lg:pt-0">
            <div className="flex-grow flex-auto ">
              <div className="flex items-center justify-start justify-items-center flex-wrap">
                <BubbleLink
                  href="https://spotify.com"
                  label="spotify"
                  mui="north_east"
                />
                <BubbleLink
                  href="https://spotify.com"
                  label="apple"
                  mui="north_east"
                />
                <BubbleLink
                  href="https://spotify.com"
                  label="youtube"
                  mui="north_east"
                />
                <BubbleLink
                  href="https://spotify.com"
                  label="soundcloud"
                  mui="north_east"
                />
                <BubbleLink
                  href="https://spotify.com"
                  label="amazon"
                  mui="north_east"
                />
                <BubbleLink
                  href="https://spotify.com"
                  label="tidal"
                  mui="north_east"
                />
                <BubbleLink
                  href="https://spotify.com"
                  label="more"
                  mui="east"
                />
              </div>
            </div>

            <span className="sm:flex group-hover:visible sm:not-hidden material-icons text-right text-7xl md:text-8xl lg:text-9xl">
              east
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return <div></div>;
}
