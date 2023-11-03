import Link from 'next/link';
import React from 'react';
import Image from 'next/legacy/image';
import dayjs from 'dayjs';

export default function SongCard(props) {
  const slug = props.slug;
  const type = props.type;
  const index = props.index;
  const src = props.src;
  const alt = props.alt;
  const title = props.title;
  const album = props.album;
  const date = props.released;
  const readingTime = props.readingTime;
  const albumLink = props.albumLink;
  const links = props.Links;
  const description = props.description;
  const trackNumber = props.trackNumber;
  // const lastEdited = props.lastEdited

  if (type != 'album') {
    return (
      <Link
        href={`/discography/${slug}`}
        key={index}
        passHref
        className="items-center sm:space-y-4 overflow-clip w-full sm:flex-col flex space-x-4 border-blue-100  sm:space-x-0 align-top cursor-pointer tracking-normal group sm:hover:bg-blue-100 sm:hover:border-blue-300 bg-blue-50 transition-all break-inside-avoid p-3 border-2 rounded-xl"
      >
        <div className="relative aspect-square min-w-24 w-24 sm:w-full rounded-lg border border-solid border-blue-100 overflow-hidden transition-all">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="https://jacobs.blue"
          />
        </div>
        <div className="flex flex-row items-center w-full font-jbd font-normal text-lg lg:text-lg tracking-normal truncate">
          <div className="flex flex-col justify-between md:h-24 lg:h-24 w-full sm:space-y-2 md:space-y-0">
            <h2 className="text-xl sm:text-2xl tracking-tight">{title}</h2>
            <div className="flex flex-col text-black/50 lg:flex-col w-full align-middle sm:space-y-0">
              {album ? (
                <p className="hidden sm:flex truncate space-x-1 tracking-tighter items-baseline font-jbd font-normal text-baseline">
                  <span>from </span> <i> {album}</i>
                </p>
              ) : null}
              <p className="text-black/50 whitespace-nowrap">
                {dayjs(date).format('MMM YYYY')}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        href={`/discography/${slug}`}
        key={index}
        passHref
        className="space-y-4 overflow-clip w-full flex-col flex border-blue-100  sm:space-x-0 align-top cursor-pointer tracking-normal group sm:hover:bg-blue-100 sm:hover:border-blue-300 bg-blue-50 transition-all break-inside-avoid p-3 border-2 rounded-xl"
      >
        <div className="relative aspect-square min-w-24 w-full rounded-lg border border-solid border-blue-100 overflow-hidden transition-all">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="https://jacobs.blue"
          />
        </div>
        <div className="flex flex-row items-center w-full font-jbd font-normal text-lg lg:text-lg tracking-normal">
          <div className="flex flex-col justify-between md:h-24 lg:h-24 w-full space-y-2">
            <h2 className="text-xl sm:text-2xl tracking-tight flex-wrap">
              {title}
            </h2>
            <div className="flex flex-col text-black/50 lg:flex-col w-full align-middle sm:space-y-0">
              <p className="text-black/50 whitespace-nowrap">
                {dayjs(date).format('MMM YYYY')}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
