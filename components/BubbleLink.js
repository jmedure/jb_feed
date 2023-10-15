import Link from 'next/link';
import React from 'react';

export default function BubbleLink(props) {
  return (
    <Link href={props.href} passHref legacyBehavior>
      <div className="flex justify-center font-jbd tracking-tight font-medium items-center text-xl p-2 capitalize rounded-lg cursor-pointer text-black/70 group-hover:text-black transition-all bg-blue-100">
        <p>{props.label}</p>
        <span className="material-icons text-base md:text-xl fontSize-small">
          {props.mui}
        </span>
      </div>
    </Link>
  );
}
