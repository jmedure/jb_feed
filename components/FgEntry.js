import Link from 'next/link';
import React from 'react';

export default function FgEntry(props) {

  const slug = props.slug;
  const index = props.index;
  const title = props.title;

  return (
    <Link href={`/free-game/${slug}`} key={index} passHref legacyBehavior>
      <div className="group flex-row py-4 w-full flex align-top cursor-pointer tracking-normal relative items-center">
          <h1 className="text-6xl md:text-8xl font-fruit italic tracking-tight hover:font-mont hover:not-italic hover:tracking-tighter leading-tight">
            {title}
          </h1>
        {/* <span className="material-icons text-xl">east</span> */}
      </div>
    </Link>
  );
}
