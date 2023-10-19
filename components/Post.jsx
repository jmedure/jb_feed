import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import YoutubeEmbed from './YoutubeEmbed';
import BubbleLink from './BubbleLink';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

export const Post = ({ post }) => {
  const { title, link, kind, date, cta, image, youtubeEmbed, aspect, mui } =
    post;
  var relativeTime = require('dayjs/plugin/relativeTime');
  dayjs.extend(relativeTime);

  const frame = () => {
    if (kind === 'music') {
      return (
        <div className="relative border border-blue-100 h-full overflow-hidden aspect-square rounded-lg">
          <Image
            src={image}
            alt="alt"
            fill="true"
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="https://images.unsplash.com/photo-1631200472313-ad91fd825080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80"
          />
        </div>
      );
    }
    if (aspect === 'square') {
      return (
        <div className="relative border border-blue-100 h-full overflow-hidden aspect-square rounded-lg">
          <Image
            src={image}
            alt="alt"
            fill="true"
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="https://images.unsplash.com/photo-1631200472313-ad91fd825080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80"
          />
        </div>
      );
    }
    if (aspect === '4x3') {
      return (
        <div className="relative border border-blue-100 h-full overflow-hidden aspect-[4/3] rounded-lg">
          <Image
            src={image}
            alt="alt"
            fill="true"
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="https://images.unsplash.com/photo-1631200472313-ad91fd825080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80"
          />
        </div>
      );
    }
    if (aspect === 'video') {
      return (
        <div className="relative border border-blue-100 h-full overflow-hidden aspect-video rounded-lg">
          <Image
            src={image}
            alt="alt"
            fill="true"
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="https://images.unsplash.com/photo-1631200472313-ad91fd825080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80"
          />
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
      className="flex-block flex-wrap group no-underline font-jbd font-normal h-min cursor-pointer"
    >
      <motion.div
        variants={item}
        // initial="hidden"
        // animate="show"
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="break-inside-avoid p-3 space-y-4 border-2 border-solid border-blue-100 sm:hover:outline-blue-400 sm:hover:outline outline outline-white  sm:hover:bg-blue-100 mb-4 bg-blue-50 rounded-xl text-black transition-all"
      >
        {frame()}
        {youtubeEmbed ? (
          <div className="w-full mb-4 relative h-full aspect-square rounded-xl overflow-hidden sm:aspect-video">
            <YoutubeEmbed embedId={youtubeEmbed} />
          </div>
        ) : null}
        <div className="flex justify-between items-start space-x-4">
          <h2 className="text-2xl leading-none tracking-tight">{title}</h2>
          <p className="text-black/50 font-jbd whitespace-nowrap text-lg">
            {dayjs().to(dayjs(date))}
          </p>
        </div>
        {cta ? <BubbleLink href={link} label={cta} mui={mui} /> : null}
      </motion.div>
    </a>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  aspect: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  kind: PropTypes.string,
  isPublished: PropTypes.bool,
  image: PropTypes.string,
  youtubeEmbed: PropTypes.string,
  date: PropTypes.string,
};
