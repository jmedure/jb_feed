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
      // console.log(response.histogram[0].visitors);
      setVisitors(response.histogram[0].visitors);
    };
    getData();
  }, []);

  // console.log(visitors.pageviews);
  return (
    <a
      href="https://simpleanalytics.com/jacobs.blue"
      className="flex items-center space-x-2 text-base"
    >
      <div className="p-[3px] rounded-full animate-pulse duration-1000 bg-blue-800"></div>
      {visitors ? (
        <p>
          0 <span className="text-neutral-500">live visitor(s) </span>
        </p>
      ) : (
        <p>
          {visitors} <span className="text-neutral-500">live visitor(s) </span>
        </p>
      )}
    </a>
  );
}
