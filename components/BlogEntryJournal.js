import Link from 'next/link';
import React from 'react';
// import Image from 'next/legacy/image';
import dayjs from 'dayjs';

export default function BlogEntryJournal(props) {
  const slug = props.slug;
  const title = props.title;
  const date = props.date;
  // const readingTime = props.readingTime;
  // const lastEdited = props.lastEdited

  return (
    <Link
      href={`/journal/${slug}`}
      className="flex group text-base p-3 space-x-3 rounded-lg bg-white flex-row w-full items-center justify-between cursor-pointer border border-black/10 transition-all duration-200 font-jbd font-normal sm:hover:text-black sm:hover:border-black/20 sm:hover:drop-shadow-lg sm:hover:bg-neutral-50 text-inherit"
    >
      <h1 className="tracking-tight">{title}</h1>
      <div className="space-x-8 justify-end text-right text-sm flex-nowrap ">
        <p>{dayjs(date).format('MM/YY')}</p>
      </div>
    </Link>
  );
}
