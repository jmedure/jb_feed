import Link from 'next/link';
import React from 'react';
import Image from "next/legacy/image";
import dayjs from 'dayjs';

export default function BlogEntry(props) {
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
        {/* <div className='py-4 blogEntry flex space-x-8 align-top cursor-pointer tracking-normal relative'> */}
        {/* <div className="relative w-40 aspect-square border-solid border-neutral-300 border">
                      <Image 
                          src={src}
                          alt={alt}
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                          blurDataURL='https://jacobs.blue'
                          />
                  </div> */}
        {/* <div className="flex-col col-span-full flex justify-between flex-1 group">      
                      <div className='flex-grow'>
                          <h1 className="text-4xl font-fruit italic tracking-tight md:not-italic leading-tight group-hover:italic">{title}</h1>
                          <p className="text-neutral-600 text-base font-mont tracking-normal">{description}</p>
                      </div>
                      <div className="text-neutral-500 flex font-sans justify-between">
                          <div className="flex space-x-2 flex-row align-middle pt-8">
                              <p>{dayjs(date).format("MMM YY")}</p>
                              <p>•</p>
                              <p className="">{readingTime}</p>
                          </div>
                      </div>
                      
                  </div>
                  <div className="flex-col flex flex-shrink h-filljustify-items-end items-center">
                      <div className="flex-row">
                          <span className="material-icons text-4xl">east</span>
                      </div>
                  </div>
              </div> */}
        <div className="group flex-row py-4 w-full flex justify-between align-top cursor-pointer tracking-normal relative items-center">
            <h1 className="text-[2.5em] font-fruit uppercase tracking-tighter font-bold md:not-italic leading-tight group-hover:italic">
              {title}
            </h1>
          <span className="material-icons text-4xl">east</span>
        </div>
      </Link>
  );
}
