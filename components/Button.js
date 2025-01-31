import Link from 'next/link';
import React from 'react';

export default function Button(props) {
  const propType = props.type;

  if (propType == 'right') {
    return (
      <a
        href={props.href}
        className="flex group flex-shrink w-min whitespace-nowrap focus:ring-1 cursor-pointer transition-all text-blue-500 dark:text-white/70 sm:hover:text-gray-900 dark:sm:hover:text-white items-baseline decoration-[1.5px] underline-offset-1"
      >
        <p>{props.copy}</p>
        <span className="flex material-icons text-sm">{props.icon}</span>

        {/* &#8599; */}
      </a>
    );
  }

  if (propType == 'left') {
    return (
      <Link href={props.href} legacyBehavior>
        <div className="flex mr-auto w-min cursor-pointer border focus:ring-1 text-neutral-500 sm:hover:text-gray-900 sm:hover:underline items-center capitalize">
          <span className="material-icons text-xs">{props.icon}</span>
          <div className="">{props.copy}</div>
        </div>
      </Link>
    );
  }

  if (propType == 'null') {
    return (
      <Link
        href={props.href}
        className="flex mr-auto w-min whitespace-nowrap transition-all focus:ring-1 cursor-pointer text-blue-500 dark:text-white/70 sm:hover:text-gray-900 dark:sm:hover:text-white items-center capitalize"
      >
        {props.copy}
      </Link>
    );
  }

  return (
    <Link href={props.href} legacyBehavior>
      <div className="flex cursor-pointer text-neutral-500 focus:ring-1 sm:hover:text-gray-900 items-center capitalize">
        <span className="material-icons text-base">
          subdirectory_arrow_right
        </span>
        <div>{props.copy}</div>
        <span className="material-icons text-xs">{props.icon}</span>
      </div>
    </Link>
  );
}
