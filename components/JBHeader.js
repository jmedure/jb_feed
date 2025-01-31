import { useTheme } from 'next-themes';
import React from 'react';
import MainNav from './MainNav';
import Image from 'next/legacy/image';
import LinksContainer from './LinksContainer';
import Link from 'next/link';
import Subheader from './Subheader';
import useScrollDirection2 from '../src/utils/useScrollDirection2';

export default function JBHeader() {
  const { theme } = useTheme();
  const scrollDirection = useScrollDirection2;
  const isDark = theme === 'dark';

  return (
    <div
      style={
        {
          // transform: `translateY(${scrollDirection === 'down' ? 0 : '100%'})`,
          // transform: `translateY(${scrollDirection === 'down' ? 0 : '10px'})`
        }
      }
      className={`py-4 w-full ${
        isDark ? 'text-white bg-gray-900' : 'text-black bg-white'
      } transition-colors duration-200`}
    >
      <div className="text-base flex justify-between w-full items-center grid-cols-3 ">
        <div className="col-span-1 ">
          <Link href="/" legacyBehavior>
            <h1 className="pb-0 group tracking-tight cursor-pointer transition-colors text-xl leading-none">
              Jacob&#39;s{' '}
              <strong className="group-hover:text-sky-600 ">Blue</strong>
            </h1>
          </Link>
          <Subheader />
        </div>
        <div className="col-span-1">
          <Link href="/links" legacyBehavior>
            <div className="flex items-center text-base space-x-1 hover:italic hover:font-light cursor-pointer">
              <p className="">all links</p>
              <span className="material-icons text-sm">east</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
