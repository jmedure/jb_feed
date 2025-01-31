import Link from 'next/link';
import React from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { object } from 'prop-types';
// import { color } from 'framer-motion';

export default function DesignProjectCard(props) {
  const slug = props.slug;
  const index = props.index;
  const isPublished = props.isPublished;
  const title = props.title;
  const date = props.date;
  // const readingTime = props.readingTime;

  if (isPublished === 'coming soon') {
    return (
      <div
        key={index}
        className="flex group px-4 py-4 font-jbd border-black/10 dark:border-white/10 space-x-4 bg-white dark:bg-neutral-900 flex-row w-full items-center justify-between rounded-xl transition-all duration-200 text-base text-neutral-700 dark:text-white/80"
      >
        <div className="flex space-x-4 items-center relative">
          <div className="flex-col space-y-1">
            <p className="font-normal text-base leading-tight">{title}</p>
          </div>
        </div>
        <div className="space-x-8 justify-end text-center tracking-normal flex-nowrap">
          <p className="text-sm px-1 items-center rounded bg-black/10 text-black/60 dark:bg-white/10 dark:text-white/60">
            {isPublished}
          </p>
        </div>
      </div>
    );
  } else
    return (
      <Link
        href={`/designs/${slug}`}
        key={index}
        passHref // onClick={randomColor()}
      >
        <div className=" flex group px-4 py-4 font-jbd border-black/10 dark:border-white/10 space-x-4 bg-white dark:bg-neutral-900 flex-row w-full items-center justify-between cursor-pointer rounded-xl transition-all duration-200 text-base text-neutral-700 dark:text-white/80 sm:hover:text-neutral-900 sm:hover:bg-neutral-100 dark:sm:hover:text-white dark:sm:hover:bg-neutral-800 ">
          <div className="flex space-x-4 items-center relative">
            <div className="flex-col space-y-1">
              <p className="font-normal text-base  md:not-italic  leading-tight">
                {title}
              </p>
            </div>
          </div>
          <div className="space-x-8 flex-grow w-24 justify-end text-right tracking-normal flex-nowrap">
            <p className="text-sm">{dayjs(date).format('MMM YY')}&#39;</p>
          </div>
        </div>
      </Link>
    );
}
