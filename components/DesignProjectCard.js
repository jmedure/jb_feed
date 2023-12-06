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
        className=" flex group px-4 py-4 font-jbd border-black/10 space-x-4 bg-white flex-row w-full items-center justify-between cursor-pointer rounded-xl transition-all duration-200 text-base text-neutral-700"
      >
        <div className="flex space-x-4 items-center relative">
          <div className="flex-col space-y-1">
            <p className="font-normal text-base sm:hover:text-black md:not-italic leading-tight">
              {title}
            </p>
          </div>
        </div>
        <div className="space-x-8 justify-end text-center tracking-normal flex-nowrap">
          <p className="text-sm px-1 items-center rounded bg-black/10 text-black/50">
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
        <div className=" flex group px-4 py-4 font-jbd border-black/10 space-x-4 bg-white flex-row w-full items-center justify-between cursor-pointer rounded-xl transition-all duration-200 text-base text-neutral-700 sm:hover:text-neutral-900 sm:hover:bg-neutral-100">
          <div className="flex space-x-4 items-center relative">
            <div className="flex-col space-y-1">
              <p className="font-normal text-base sm:hover:text-black  md:not-italic  leading-tight">
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
