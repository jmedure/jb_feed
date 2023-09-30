import React, { useEffect, useState } from 'react';
import MainNav from './MainNav';
import Link from 'next/link';
import Subheader from './Subheader';

export default function JBHeader() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        'https://simpleanalytics.com/jacobs.blue.json?version=5&fields=histogram&start=today&end=today&timezone=UTC'
      );
      const response = await query.json();
      //   console.log(response.histogram);
      setVisitors(response.histogram[0]);
    };
    getData();
  }, []);

  console.log(visitors.pageviews);

  return (
    <div
      style={
        {
          // transform: `translateY(${scrollDirection === 'down' ? 0 : '100%'})`,
          // transform: `translateY(${scrollDirection === 'down' ? 0 : '10px'})`
        }
      }
      className="py-4 w-full text-black"
    >
      <div className="text-base flex justify-between w-full items-center grid-cols-3 ">
        <div className="col-span-1 ">
          <Link href="/" legacyBehavior>
            <div className="flex items-center cursor-pointer group transition-colors text-xl space-x-1 ">
              <h1 className="pb-0 tracking-tight leading-none">Jacob&#39;s</h1>
              <p className="group-hover:text-sky-600">Blue</p>
            </div>
          </Link>
          <Subheader />
        </div>
        <div className="col-span-1">
          {/* <Link href="/links" legacyBehavior>
            <div className="flex items-center text-base space-x-1 hover:italic hover:font-light cursor-pointer">
              <p className="">all links</p>
              <span className="material-icons text-sm">east</span>
            </div>
          </Link> */}
          {/* {visitors.map((visitor) => {
            return (
              <> */}
          <div className="items-center flex space-x-2">
            <div className="p-1 rounded-full animate-pulse duration-1000 bg-blue-800"></div>
            <p>{visitors.pageviews} Live visitors </p>
          </div>
          {/* </>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
