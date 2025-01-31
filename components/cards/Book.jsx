import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
// import YoutubeEmbed from '../YoutubeEmbed';
// import { motion } from 'framer-motion';

export const Book = ({ book }) => {
  const { title, cover, author, link, rank } = book;

  const id = title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü');

  console.log(id);

  //

  return (
    <a
      href={link}
      className="flex-block flex-nowrap group no-underline font-jbd font-normal cursor-pointer"
    >
      <li
        id={`#${id}`}
        className="p-3 space-y-4 border-2 border-solid border-neutral-100 dark:border-white/20 sm:hover:outline-neutral-400 sm:hover:outline outline duration-100 outline-white dark:outline-neutral-900 dark:sm:hover:outline-white dark:sm:hover:border-neutral-900 sm:hover:bg-neutral-100 dark:sm:hover:bg-neutral-700 bg-neutral-50 dark:bg-neutral-800 h-min rounded-xl text-black dark:text-white transition-all"
      >
        <div className="flex w-full bg-neutral-200 dark:bg-neutral-900 border dark:border-white/10 p-8 rounded-lg overflow-clip h-fit">
          {rank <= 99 ? (
            <p className="bg-white/80 dark:bg-white/10 absolute w-8 h-8 -ml-5 -mt-5 text-center align-middle pt-[2px] z-10 rounded-full text-lg text-black/50 dark:text-white/50">
              {rank}
            </p>
          ) : null}
          <div className="relative items-center align-middle m-2 w-full h-96 min-h-[228px] rounded-xl sm:group-hover:drop-shadow-xl transition-all">
            <Image src={cover} alt="book" fill objectFit="contain" />
          </div>
        </div>
        <div className="flex justify-between flex-col items-start">
          <p className="">{title}</p>
          <p className="text-black/50 dark:text-white/50">{author}</p>
        </div>
      </li>
    </a>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  link: PropTypes.string,
  seg: PropTypes.string,
  cover: PropTypes.string,
};
