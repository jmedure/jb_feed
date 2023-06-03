import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function BubbleLink(props) {
  return (
    <Link href={props.href} passHref legacyBehavior>
      <div className="flex group font-mont text-2xl items-center sm:text-3xl bg-neutral-300 capitalize rounded-full py-1 px-3 cursor-pointer border border-solid border-black/5 sm:hover:border-black/10 sm:hover:bg-neutral-300/50 space-x-2 sm:space-x-6 transition-all duration-100">
        <p className="whitespace-nowrap">{props.label}</p>
        {/* <span className="material-icons text-base md:text-xl fontSize-small">
          {props.mui}
        </span> */}
        {props.icon ? <FontAwesomeIcon icon={props.icon} /> : null}
        {props.img ? (
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 align-middle justify-center text-2xl">
            <Image alt={props.label + ' icon'} src={props.img} fill />
          </div>
        ) : null}
      </div>
    </Link>
  );
}
