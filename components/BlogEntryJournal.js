import Link from 'next/link';
import React from 'react';
import Image from 'next/legacy/image';
import dayjs from 'dayjs';

export default function BlogEntryJournal(props) {
  const slug = props.slug;
  const index = props.index;
  // const src = props.src;
  // const alt = props.alt;
  const title = props.title;
  // const description = props.description;
  const date = props.date;
  // const readingTime = props.readingTime;
  // const lastEdited = props.lastEdited

  return (
    <Link
      href={`/journal/${slug}`}
      key={index}
      passHref
      className="flex group p-4 space-x-4 bg-white flex-row w-full items-center justify-between cursor-pointer border border-solid border-black/10  rounded-lg hover:relative transition-all duration-100 sm:hover:drop-shadow hover:border-black group font-jbd font-normal tracking-tight text-black/70 sm:hover:text-black "
    >
      <h1 className="text-xl tracking-tight leading-tight">{title}</h1>
      <div className="space-x-8 flex-grow w-24 justify-end text-right flex-nowrap text-black/50 sm:group-hover:text-black">
        {/* <p>J. Medure</p> */}
        <p>{dayjs(date).format('MM.YY')}</p>
      </div>
    </Link>
  );
}
