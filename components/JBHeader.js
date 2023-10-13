import React, { useEffect, useState } from 'react';
import MainNav from './MainNav';
import Link from 'next/link';
import Subheader from './Subheader';
import LiveVisitors from './LiveVistors';

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

  // console.log(visitors.pageviews);

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
      <div className="text-base font-normal font-jbd flex justify-between w-full items-center grid-cols-3 ">
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
          <Link href="#footer" className="underline">
            Explore
          </Link>
          {/* </>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
