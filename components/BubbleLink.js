import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function BubbleLink(props) {
  return (
    <Link href={props.href} passHref legacyBehavior>
      <div className="flex group font-mont text-lg items-center sm:text-3xl bg-neutral-300 transition-all capitalize rounded-full py-1 px-3 cursor-pointer border border-solid border-black/5 hover:border-black/10 hover:bg-neutral-300/50 space-x-6">
        <p className="whitespace-nowrap">{props.label}</p>
        {/* <span className="material-icons text-base md:text-xl fontSize-small">
          {props.mui}
        </span> */}
        {props.icon ? <FontAwesomeIcon icon={props.icon} /> : null}
        {props.img ? (
          <div className="relative w-10 h-10 align-middle justify-center text-2xl">
            <Image alt={props.label + ' icon'} src={props.img} fill />
          </div>
        ) : null}
      </div>
    </Link>
  );
}
