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

  const songType = () => {
    if (description == '') {
      return (
        <div>
          <Link href={`/discography/${albumLink}`} legacyBehavior>
            <div className="flex items-center">
              <a className="decoration-black text-base">
                <p>
                  Track {trackNumber} from {album}
                </p>
              </a>
            </div>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <p>{description}</p>
        </div>
      );
    }
  };

  return (
    <Link href={`/discography/${slug}`} key={index} passHref legacyBehavior>
      <div className="items-center ring-1 overflow-clip ring-white sm:hover:ring-blue-500 border-2 border-solid border-blue-100 p-2 w-full sm:flex-col flex space-x-4 sm:space-x-0 align-top cursor-pointer tracking-normal group sm:hover:bg-blue-200 bg-blue-50 rounded-xl sm:space-y-2 transition-all">
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
            <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
            <div className="flex flex-col text-black/50 lg:flex-col w-full align-middle sm:space-y-0">
              {album ? (
                <p className="hidden sm:flex truncate">{album}</p>
              ) : null}
              <p className="text-neutral-500 whitespace-nowrap">
                {dayjs(date).format('MMM YYYY')}
              </p>
            </div>
          </div>
          {/* <div className="flex-col flex flex-shrink items-center lg:items-end">
            <span className="material-icons ">east</span>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
