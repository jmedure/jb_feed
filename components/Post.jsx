import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import YoutubeEmbed from './YoutubeEmbed';
import { data } from 'autoprefixer';
import BubbleLink from './BubbleLink';
import { motion } from 'framer-motion';

export const Post = ({ post }) => {
  const { title, link, kind, date, cta, image, youtubeEmbed } = post;

  const extras = () => {
    if (kind === 'video') {
      return (
        <div
          className="flex mt-4 flex-row justify-between items-end lg:pt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="flex-grow flex-auto ">
            <div className="flex items-center justify-start justify-items-center flex-wrap">
              <BubbleLink href={link} label="watch now" mui="north_east" />
            </div>
          </div>

          {/* <span className="sm:flex group-hover:visible sm:not-hidden material-icons text-right text-7xl md:text-8xl lg:text-9xl">
            north_east
          </span> */}
        </div>
      );
    }
    if (kind === 'writing') {
      return (
        <div className="flex mt-4 flex-row justify-between items-end lg:pt-0">
          <div className="flex-grow flex-auto ">
            <div className="flex items-center justify-start justify-items-center flex-wrap">
              <BubbleLink href={link} label="read now" mui="east" />
            </div>
          </div>

          {/* <span className="sm:flex group-hover:visible sm:not-hidden material-icons text-right text-7xl md:text-8xl lg:text-9xl">
            east
          </span> */}
        </div>
      );
    }
    if (kind === 'music') {
      return (
        <div className="flex mt-4 flex-row justify-between items-end lg:pt-0">
          <div className="flex-grow flex-auto ">
            {/* <div className="flex items-center justify-start justify-items-center flex-wrap">
              <BubbleLink href={spotify} label="spotify" mui="north_east" />
              <BubbleLink href={apple} label="apple" mui="north_east" />
              <BubbleLink href={youtube} label="youtube" mui="north_east" />
              <BubbleLink
                href={soundcloud}
                label="soundcloud"
                mui="north_east"
              />
              <BubbleLink href={amazon} label="amazon" mui="north_east" />
              <BubbleLink href={tidal} label="tidal" mui="north_east" />
              <BubbleLink href={link} label="more" mui="east" />
            </div> */}
          </div>

          {/* <span className="sm:flex group-hover:visible sm:not-hidden material-icons text-right text-7xl md:text-8xl lg:text-9xl">
            east
          </span> */}
        </div>
      );
    }
    if (kind === 'merch') {
      return (
        <div className="flex mt-4 flex-row justify-between items-end lg:pt-0">
          <div className="flex-grow flex-auto ">
            <div className="flex items-center justify-start justify-items-center flex-wrap">
              <BubbleLink href={link} label="Peep the merch" mui="north_east" />
            </div>
          </div>

          {/* <span className="sm:flex group-hover:visible sm:not-hidden material-icons text-right text-7xl md:text-8xl lg:text-9xl">
            north_east
          </span> */}
        </div>
      );
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <a
      href={link}
      className="flex-block flex-wrap group no-underline font-jbd font-normal h-min"
    >
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="break-inside-avoid p-3 space-y-4 border-2 border-solid border-blue-100 outline-blue-500 sm:hover:outline hover:outline-2  sm:hover:bg-blue-200 mb-4 bg-blue-50 rounded-xl text-black transition-all"
      >
        {image ? (
          <div className="w-full mb-4 relative h-full overflow-hidden aspect-square rounded-lg ">
            <Image
              src={image}
              alt="alt"
              fill
              objectFit="cover"
              // placeholder="blur"
              // blurDataURL="https://images.unsplash.com/photo-1631200472313-ad91fd825080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80"
            />
          </div>
        ) : null}
        {youtubeEmbed ? (
          <div className="w-full mb-4 relative h-full aspect-square rounded-xl overflow-hidden sm:aspect-video">
            <YoutubeEmbed embedId={youtubeEmbed} />
          </div>
        ) : null}
        <div className="flex justify-between items-center space-x-4">
          <h2 className="text-2xl leading-none tracking-tight">{title}</h2>
          <p className="text-black/50 font-jbd capitalize text-lg">{kind}</p>
        </div>
        {/* {extras()} */}
        {cta ? <BubbleLink href={link} label={cta} mui="north_east" /> : null}
      </motion.div>
    </a>
  );
};

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
  soundcloud: PropTypes.string,
};
