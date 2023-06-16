import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { color } from 'framer-motion';

export default function DesignProjectCard(props) {
  const slug = props.slug;
  const index = props.index;
  const src = props.src;
  const alt = props.alt;
  const title = props.title;
  const description = props.description;
  const date = props.date;
  const readingTime = props.readingTime;
  // const colorF = props.color;
  const tile = props.tile;

  const colors = ['bg-blue-400', 'bg-blue-600', 'bg-blue-100', 'bg-blue-200'];

  // function randomColor() {
  //   let i = Math.floor(Math.random() * 2);
  //   const color = colors[i];
  // }

  // randomColor();

  return (
    <Link
      href={`/design/${slug}`}
      key={index}
      passHref
      legacyBehavior
      // onClick={randomColor()}
    >
      <div
        className="font-mont flex group p-4 space-x-4 bg-white tracking-normal
          flex-row w-full items-center justify-between cursor-pointer
          rounded-3xl hover:relative transition-all duration-200 text-base
           text-neutral-800  hover:bg-neutral-50"
      >
        <div className="flex space-x-4 items-center">
          {/* <div
            className={`${color} bg-inherit border border-solid rounded-xl w-14 h-14`}
          ></div> */}
          <Image
            className="rounded-xl w-14 h-14 relative"
            src={tile}
            placeholder="/1.png"
            alt="cover"
            fill="true"
          />
          <div className="flex-col space-y-1">
            <p className="font-normal text-lg sm:hover:text-black text-black tracking-tight md:not-italic  leading-tight">
              {title}
            </p>
            <p className="leading-tight text-lg sm:group-hover:text-black">
              {description}
            </p>
          </div>
        </div>
        <div className="space-x-8 flex-grow w-24 justify-end text-right flex-nowrap">
          <p>{dayjs(date).format('MMM YY')}</p>
        </div>
      </div>
    </Link>
  );
}
