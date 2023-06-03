import Link from 'next/link';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import siteMetadata from '../data/siteMetadata';

export default function PrimaryButton(props) {
  return (
    <Link href={props.href} legacyBehavior>
      <div className="flex items-center w-full py-4 md:py-3 cursor-pointer bg-white group-hover:bg-white sm:group-hover:border-black/20 text-black/90 group-hover:text-black border-black/10 border border-solid justify-center rounded-[24px] flex-nowrap space-x-1 text-2xl md:text-3xl transition-all">
        {props.label ? <p>{props.label}</p> : <p>View now</p>}
        <span className="sm:flex sm:group-hover:translate-x-1 transition items-center sm:not-hidden material-icons text-3xl text-right">
          {props.mui}
        </span>
      </div>
    </Link>
  );
}
