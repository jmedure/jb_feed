import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import YoutubeEmbed from './YoutubeEmbed';
import { motion } from 'framer-motion';

export const Book = ({ book }) => {
  const { title, cover, author, link, rank } = book;

  return (
    <a
      href={link}
      className="flex-block flex-nowrap group no-underline font-jbd font-normal cursor-pointer"
    >
      <li className="p-3 space-y-4 border-2 border-solid border-neutral-100 sm:hover:outline-neutral-400 sm:hover:outline outline duration-100 outline-white sm:hover:bg-neutral-100 bg-neutral-50 h-min rounded-xl text-black transition-all">
        <div className="flex w-full bg-neutral-200 border p-8 rounded-lg overflow-clip h-fit">
          {rank <= 99 ? (
            <p className="bg-white/80 absolute w-8 h-8 -ml-5 -mt-5 text-center align-middle pt-[2px]  z-10 rounded-full text-lg text-black/50">
              {rank}
            </p>
          ) : null}
          <div className="relative items-center align-middle border m-2 w-full h-96 min-h-[228px] sm:group-hover:drop-shadow-xl transition-all">
            <Image src={cover} alt="book" fill objectFit="contain" />
          </div>
        </div>
        <div className="flex justify-between flex-col items-start">
          <p className="">{title}</p>
          <p className="text-black/50">{author}</p>
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
