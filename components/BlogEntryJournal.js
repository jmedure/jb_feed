import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

export default function BlogEntryJournal(props) {
  const slug = props.slug;
  const index = props.index;
  const src = props.src;
  const alt = props.alt;
  const title = props.title;
  const description = props.description;
  const date = props.date;
  const readingTime = props.readingTime;
  // const lastEdited = props.lastEdited

  return (
    <Link href={`/meditations/${slug}`} key={index} passHref legacyBehavior>
      <div className="flex group p-6 space-x-4 bg-white flex-row w-full items-center justify-between cursor-pointer tracking-normal border border-solid border-neutral-300 rounded-md hover:relative transition-all duration-200 hover:border-black hover:drop-shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-fruit tracking-tighter font-light md:not-italic  leading-tight">
            {title}
          </h1>
          <div className='space-x-8 font-mono flex-grow w-24 justify-end text-right flex-nowrap text-sm'>
            {/* <p>J. Medure</p> */}
            <p>{dayjs(date).format("MMM YY")}</p>
          </div>
      </div>
    </Link>
  );
}
