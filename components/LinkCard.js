import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LinkCard(props) {
  return (
    <Link passHref href={props.href} className="hover:cursor-pointer">
      <div className="py-4 pl-4 pr-4 w-full flex-grow text-2xl flex group hover:cursor-pointer hover:bg-neutral-100 justify-between">
        <div className="flex items-center">
          <div className="">
            {/* <FontAwesomeIcon icon={props.fai} className="text-3xl"/> */}
          </div>
          <div className="flex space-x-3 items-center">
            <FontAwesomeIcon
              icon={props.fai}
              className="w-8  align-middle justify-center text-2xl"
            />
            <p>{props.label}</p>
          </div>
        </div>
        <span className="material-icons text-2xl">{props.mui}</span>
      </div>
    </Link>
  );
  }