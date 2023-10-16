import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LiveVisitors() {
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
    <div className="items-center flex space-x-2 text-base">
      <div className="p-[3px] rounded-full animate-pulse duration-1000 bg-blue-800"></div>
      <p>
        {visitors.pageviews}{' '}
        <span className="text-neutral-500">live visitor(s) </span>
      </p>
    </div>
  );
}
