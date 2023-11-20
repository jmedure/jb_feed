import { useEffect, useState } from 'react';

export default function LiveVisitors() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        'https://simpleanalytics.com/jacobs.blue.json?version=5&fields=visitors&start=yesterday&end=today&timezone=UTC'
      );
      const response = await query.json();
      setVisitors(response.visitors);
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
          {visitors} <span className="text-neutral-500">live visitor(s) </span>
        </p>
      ) : (
        <p>
          1 <span className="text-neutral-500">live visitor(s) </span>
        </p>
      )}
    </a>
  );
}
