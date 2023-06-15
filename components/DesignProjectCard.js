import Link from 'next/link';
import React from 'react';
import Image from 'next/legacy/image';
import dayjs from 'dayjs';

export default function DesignProjectCard(props) {
  const slug = props.slug;
  const index = props.index;
  const src = props.src;
  const alt = props.alt;
  const title = props.title;
  const description = props.description;
  const date = props.date;
  const readingTime = props.readingTime;
  const color = props.color;
  // const lastEdited = props.lastEdited

  return (
    <Link href={`/design/${slug}`} key={index} passHref legacyBehavior>
      <div className="font-mont flex group p-4 space-x-4 bg-white tracking-normal flex-row w-full items-center justify-between cursor-pointer rounded-3xl hover:relative transition-all duration-200 text-base hover:bg-neutral-100 text-neutral-800">
        <div className="flex space-x-3 items-center">
          <div className={`${color} rounded-xl w-14 h-14`}></div>
          <div className="flex-col space-y-1">
            <p className="font-normal text-lg text-black tracking-tight md:not-italic  leading-tight">
              {title}
            </p>
            <p className="leading-tight text-lg">{description}</p>
          </div>
        </div>
        <div className="space-x-8 flex-grow w-24 justify-end text-right flex-nowrap">
          <p>{dayjs(date).format('MMM YY')}</p>
        </div>
      </div>
    </Link>
  );
}
