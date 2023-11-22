import React, { Suspense } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
// import YoutubeEmbed from '../YoutubeEmbed';
import BubbleLink from '../BubbleLink';
// import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import Skeleton from '../Skeleton';
import Video from '../mdx/VideoBasic';
import VideoBasic from '../mdx/VideoBasic';

export const Post = ({ post }) => {
  const {
    title,
    link,
    kind,
    date,
    cta,
    image,
    youtubeEmbed,
    aspect,
    mui,
    videoSrc,
  } = post;

  const blurDataURL =
    'data:image/jpeg;base64,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';
  var relativeTime = require('dayjs/plugin/relativeTime');
  dayjs.extend(relativeTime);

  const frame = () => {
    return (
      <div
        className={`
          relative border border-black/10 rounded-lg h-full overflow-hidden object-cover
          ${aspect === '4x3' ? 'aspect-[4/3]' : ''}
          ${aspect === 'video' ? 'aspect-video' : ''}
          ${aspect === 'square' || kind === 'music' ? 'aspect-square' : ''} 
        `}
      >
        {videoSrc ? (
          <VideoBasic src={videoSrc} image={image} />
        ) : (
          <Image
            src={image}
            alt="alt"
            // width={500}
            // height={500}
            fill
            className="object-cover"
            placeholder="blur"
            sizes="(min-width: 390px), 50vw, 100vw"
            blurDataURL={blurDataURL}
          />
        )}
      </div>
    );
  };

  return (
    <Link
      href={link}
      className="flex-block flex-wrap group no-underline font-jbd font-normal h-min cursor-pointer"
    >
      <div className="break-inside-avoid p-3 space-y-4 border-2 border-solid border-black/10 sm:hover:outline-blue-400 sm:hover:outline outline outline-white sm:hover:bg-blue-100 sm:hover:border-blue-100 mb-4 bg-neutral-50 rounded-xl text-black transition-all duration-50">
        {frame()}
        <div className="flex justify-between items-start space-x-4">
          <h2 className="text-2xl leading-none tracking-tight">{title}</h2>
          <p className="text-black/50 font-jbd whitespace-nowrap text-lg">
            {dayjs().to(dayjs(date))}
          </p>
        </div>
        {cta ? <BubbleLink href={link} label={cta} mui={mui} /> : null}
      </div>
    </Link>
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
  videoSrc: PropTypes.string,
};
