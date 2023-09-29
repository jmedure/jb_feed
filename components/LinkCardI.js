import React from 'react';
import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/legacy/image';

export default function LinkCardI(props) {
  if (props.iconType == 'rotate') {
    return (
      <Link
        passHref
        href={props.href}
        className="hover:cursor-pointer"
        legacyBehavior
      >
        <div className="py-3 pl-3 pr-4 w-full flex-grow text-2xl items-center flex group hover:cursor-pointer bg-white/20 backdrop-blur hover:bg-white/50 justify-between">
          <div className="flex space-x-2 items-center">
            <div className="relative rotate w-10 h-10 align-middle justify-center text-2xl">
              <Image
                alt={props.label + ' icon'}
                src={props.src}
                objectFit="contain"
                layout="fill"
              />
            </div>
            <p>{props.label}</p>
          </div>
          <span className="material-icons text-2xl">{props.mui}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      passHref
      href={props.href}
      className="hover:cursor-pointer"
      legacyBehavior
    >
      <div className="py-3 pl-3 pr-4 w-full flex-grow text-2xl items-center flex group hover:cursor-pointer bg-white/20 backdrop-blur hover:bg-white/50 justify-between">
        <div className="flex space-x-2 items-center">
          <div className="relative w-10 h-10  align-middle justify-center text-2xl">
            <Image
              alt={props.label + ' icon'}
              src={props.src}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <p>{props.label}</p>
        </div>
        <span className="material-icons text-2xl">{props.mui}</span>
      </div>
    </Link>
  );
}
