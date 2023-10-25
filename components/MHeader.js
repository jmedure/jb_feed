import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
// import { useScrollDirection } from '../src/utils/useScrollDirection';
// import useReadingProgress from '../src/utils/useReadingProgress';

export default function MHeader(props) {
  const completion = useReadingProgress();
  const docHeight = useReadingProgress(docHeight);
  // const scrollDirection = useScrollDirection;
  // // console.log(completion)

  return (
    <div className="py-4 md:py-5 w-full bg-white/90 backdrop-blur-sm z-40 sticky top-0 mt-0 border-b border-neutral-200 border-solid">
      <div className="w-full container-blog flex justify-between items-center mt-0">
        <Link href="/meditations" passHref legacyBehavior>
          <h1 className="text-2xl md:text-3xl flex font-fruit cursor-pointer hover:italic hover:tracking-tight tracking-tighter">
            Meditations of a Rockstar
          </h1>
        </Link>
        {/* <div className="w-96 flex-shrink h-2 mx-auto bg-slate-200 flex align-middle items-center self-middle rounded-full">
                <span
                style={{ width: `${completion}%`}}
                className="bg-blue-500 h-1 m-1 transition-colors self-center rounded-full"
                />
              </div> */}
        <Link href="/" passHref legacyBehavior>
          <div className="flex py-2 space-x-1 hover:italic hover:font-light items-center cursor-pointer">
            <p>to main website</p>
            <span className="material-icons text-sm">east</span>
          </div>
        </Link>
      </div>
      <div className="w-full overflow-hidden left-0 h-4 absolute bottom-0 align-middle">
        <span
          style={{ width: `${completion}%` }}
          className="bg-gradient-to-r from-blue-500 to-sky-100 h-[.2em]  absolute bottom-0 transition-colors self-center rounded-full"
        />
      </div>
    </div>
  );
}
