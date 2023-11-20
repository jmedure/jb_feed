import React, { Suspense } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
// import YoutubeEmbed from '../YoutubeEmbed';
import BubbleLink from '../BubbleLink';
// import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import Skeleton from '../Skeleton';

export const Post = ({ post }) => {
  const { title, link, kind, date, cta, image, youtubeEmbed, aspect, mui } =
    post;
  var relativeTime = require('dayjs/plugin/relativeTime');
  dayjs.extend(relativeTime);

  const frame = () => {
    if (kind === 'music') {
      return (
        <div className="relative border border-neutral-100 h-full overflow-hidden aspect-square rounded-lg">
          <Image
            src={image}
            alt="alt"
            // fill="true"
            width={580}
            height={580}
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            loading="lazy"
            blurDataURL="https://jacobs.blue"
          />
        </div>
      );
    }
    if (aspect === 'square') {
      return (
        <div className="relative border border-neutral-100 h-full overflow-hidden aspect-square rounded-lg">
          <Image
            src={image}
            alt="alt"
            // fill="true"
            width={585}
            height={585}
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            loading="lazy"
            blurDataURL="https://jacobs.blue"
          />
        </div>
      );
    }
    if (aspect === '4x3') {
      return (
        <div className="relative border border-neutral-100 h-full overflow-hidden aspect-[4/3] rounded-lg">
          <Image
            src={image}
            alt="alt"
            fill="true"
            // width={580}
            // height={580}
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            loading="lazy"
            blurDataURL="https://jacobs.blue"
          />
        </div>
      );
    }
    if (youtubeEmbed && aspect === 'video') {
      return (
        <div className="relative border select-none transition-opacity border-neutral-100 w-full overflow-hidden aspect-video h-full rounded-lg z-20 ">
          <Image
            src={image}
            alt="alt"
            fill="true"
            // width={580}
            // height={325}
            // style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="object-cover "
            placeholder="blur"
            loading="lazy"
            blurDataURL="https://jacobs.blue"
          />
        </div>
      );
    }
    if (aspect === 'video') {
      return (
        <div className="relative border border-neutral-100 h-full overflow-hidden aspect-video w-full rounded-lg z-10">
          <Image
            src={image}
            alt="alt"
            fill="true"
            // width={600}
            // height={400}
            className="object-cover"
            placeholder="blur"
            loading="lazy"
            sizes="(min-width: 390px), 50vw, 100vw"
            blurDataURL="https://jacobs.blue"
          />
        </div>
      );
    }
  };

  return (
    <Link
      href={link}
      className="flex-block flex-wrap group no-underline font-jbd font-normal h-min cursor-pointer"
    >
      <div className="break-inside-avoid p-3 space-y-4 border-2 border-solid border-neutral-100 sm:hover:outline-blue-400 sm:hover:outline outline outline-white sm:hover:bg-blue-100 mb-4 bg-neutral-50 rounded-xl text-black transition-all duration-50">
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
};
