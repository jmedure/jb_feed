import Link from 'next/link';
import React from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { object } from 'prop-types';
// import { color } from 'framer-motion';

export default function DesignProjectCard(props) {
  const slug = props.slug;
  const index = props.index;
  const src = props.src;
  const alt = props.alt;
  const title = props.title;
  const date = props.date;
  // const readingTime = props.readingTime;
  const colors = ['bg-blue-400', 'bg-blue-600', 'bg-blue-100', 'bg-blue-200'];

  return (
    <Link
      href={`/designs/${slug}`}
      key={index}
      passHref // onClick={randomColor()}
    >
      <div className=" flex group px-4 py-4 font-jbd border-black/10 space-x-4 bg-white flex-row w-full items-center justify-between cursor-pointer rounded-xl transition-all duration-200 text-base text-neutral-700 sm:hover:text-neutral-900 sm:hover:bg-neutral-100">
        <div className="flex space-x-4 items-center relative">
          {/* <Image
            className="rounded-md h-12 w-12 relative border border-black/10"
            src={src}
            placeholder="/design/1.png"
            style={{ objectFit: 'cover' }}
            fill
          /> */}
          <div className="flex-col space-y-1">
            <p className="font-normal text-base sm:hover:text-black  md:not-italic  leading-tight">
              {title}
            </p>
          </div>
        </div>
        <div className="space-x-8 flex-grow w-24 justify-end text-right tracking-normal flex-nowrap">
          <p className="text-sm">{dayjs(date).format('MMM YY')}'</p>
        </div>
      </div>
    </Link>
  );
}
