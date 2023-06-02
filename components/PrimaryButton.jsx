import Link from 'next/link';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import siteMetadata from '../data/siteMetadata';

export default function PrimaryButton(props) {
  return (
    <Link href={siteMetadata.discord} legacyBehavior>
      <div className="flex items-center transition-all py-4 md:py-3 cursor-pointer hover:bg-black hover:text-white  border-black border border-solid text-black justify-center rounded-full flex-nowrap space-x-2">
        <p>test copy</p>
        {/* <FontAwesomeIcon icon={faDiscord} /> */}
        {/* <p>Join my cult</p> */}
        <span className="sm:flex group-hover:visible sm:not-hidden material-icons text-right text-xl">
          east
        </span>
      </div>
    </Link>
  );
}
