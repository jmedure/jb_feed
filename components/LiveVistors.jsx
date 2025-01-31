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
      className="flex items-center space-x-2 text-base tracking-normal"
    >
      <div className="p-[3.5px] rounded-full animate-pulse duration-2000 whitespace-nowrap bg-blue-800 dark:bg-sky-400"></div>
      {visitors ? (
        <p>
          {visitors}{' '}
          <span className="text-neutral-500 dark:text-white/80">
            live visitors{' '}
          </span>
        </p>
      ) : (
        <p>
          1{' '}
          <span className="text-neutral-500 dark:text-white/80">
            live visitor{' '}
          </span>
        </p>
      )}
    </a>
  );
}
