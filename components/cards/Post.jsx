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
import { useTheme } from 'next-themes';

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

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const blurDataURL =
    'data:image/jpeg;base64,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';
  var relativeTime = require('dayjs/plugin/relativeTime');
  dayjs.extend(relativeTime);

  const frame = () => {
    return (
      <div
        className={`
          relative  transition-all rounded-xl h-full overflow-clip object-cover'
          ${
            link
              ? 'border border-white/20 dark:sm:group-hover:border-white/20 sm:group-hover:border-blue-400'
              : 'border dark:border-white/10 border-black/10'
          }
          ${aspect === '4x3' ? 'aspect-[4/3]' : ''}
          ${aspect === 'video' ? 'aspect-video' : ''}
          ${aspect === 'square' || kind === 'music' ? 'aspect-square' : ''} 
        `}
      >
        {videoSrc ? (
          <div
            className={`${
              link ? 'group-hover:scale-105' : null
            } transition-all h-full`}
          >
            <VideoBasic src={videoSrc} image={image} />
          </div>
        ) : (
          <Image
            src={image}
            alt="alt"
            fill
            className="object-cover group-hover:scale-105 transition-all"
            placeholder="blur"
            sizes="(min-width: 390px), 50vw, 100vw"
            blurDataURL={blurDataURL}
          />
        )}
      </div>
    );
  };

  return link ? (
    <Link
      href={link}
      className="flex-block flex-wrap group no-underline font-jbd font-normal h-min cursor-pointer"
    >
      <div className="break-inside-avoid space-y-4 p-3 border-2 border-solid border-black/10 dark:border-white/10 sm:hover:outline-blue-400 sm:hover:outline outline outline-white dark:outline-neutral-900 dark:sm:hover:bg-white/20 dark:sm:hover:outline-white/50 dark:sm:hover:bg-neutral-800 dark:sm:hover:border-neutral-900 sm:hover:border-white mb-4 dark:bg-neutral-800 bg-neutral-100 rounded-xl transition-all duration-50">
        {/* <div className="break-inside-avoid space-y-4 mb-6 rounded-xl text-black transition-all duration-50"> */}
        {frame()}
        <div className="flex justify-between items-start space-x-4 tracking-tight">
          <h2 className="text-xl text-black sm:text-black/50 sm:group-hover:text-black dark:text-white dark:sm:text-white/80 dark:sm:group-hover:text-white transition">
            {title}
          </h2>
          <p className="text-black/50 dark:text-white/50 font-jbd whitespace-nowrap text-lg ">
            {dayjs().to(dayjs(date))}
          </p>
        </div>
        {/* {cta ? <BubbleLink href={link} label={cta} mui={mui} /> : null} */}
      </div>
    </Link>
  ) : (
    <div className="flex-block flex-wrap group no-underline font-jbd font-normal h-min">
      <div className="break-inside-avoid space-y-4 sm:hover:outline-blue-400 mb-6  rounded-xl transition-all duration-50">
        {/* <div className="break-inside-avoid space-y-4 mb-6 rounded-xl text-black transition-all duration-50"> */}
        {frame()}
        {/* <div className="flex justify-between items-start space-x-4 tracking-tight">
          <h2
            className={`text-xl text-black sm:text-black/50 ${
              link
                ? 'sm:group-hover:text-black dark:sm:group-hover:text-white'
                : null
            } dark:text-white dark:sm:text-white/80  transition`}
          >
            {title}
          </h2>
          <p className="text-black/50 dark:text-white/50 font-jbd whitespace-nowrap text-lg ">
            {dayjs().to(dayjs(date))}
          </p>
        </div> */}
        {/* {cta ? <BubbleLink href={link} label={cta} mui={mui} /> : null} */}
      </div>
    </div>
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
