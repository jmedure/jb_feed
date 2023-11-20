import Link from 'next/link';
import React from 'react';

export default function BubbleLink(props) {
  return (
    <Link href={props.href} passHref legacyBehavior>
      <div className="flex justify-center font-jbd tracking-tight font-normal items-center text-xl p-3 rounded-lg cursor-pointer text-black/80 sm:group-hover:text-black transition-all bg-neutral-200 sm:group-hover:bg-blue-200">
        {props.label}
        <span className="material-icons text-base md:text-xl">{props.mui}</span>
      </div>
    </Link>
  );
}
