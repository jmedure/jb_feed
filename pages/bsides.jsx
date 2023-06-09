import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faSpotify } from '@fortawesome/free-brands-svg-icons';
import BlogSEO from '../components/BlogSEO';

export default function Bsides() {
  const [launchTime, setLaunchTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('06/23/2023 23:59:59');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setLaunchTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <head>
        <BlogSEO
          title={
            "Born in the Sunset: Thoughts to Oasis (B-SIDES) by Jacob's Blue coming June 23, 2023"
          }
          description="Pre-save BSIDES today"
          image="cover-art/bsides.jpg"
          canonical="/index"
        />
      </head>
      <div className="container bsides">
        <div className="flex sticky z-10 top-0 p-4 align-middle justify-center mt-16 md:mt-8 transition-all sm:hover:text-blue-500">
          <Link href="/" passHref legacyBehavior>
            <div className="flex col-span-1 py-2 justify-end space-x-1 items-center sm:hover:drop-shadow-xl transition-all duration-200 cursor-pointer">
              <div className="border-white border-2 border-solid rounded-full relative p-5 cursor-pointer">
                <Image alt="blue gradient" src="/logo.png" fill cover />
              </div>
            </div>
          </Link>
        </div>
        <div className="py-4 flex-col flex justify-center mx-auto">
          <div className="flex relative justify-center align-middle">
            <Image
              alt="born in the sunset: thoughts to oasis - b sides by Jacob's blue cover art"
              src="/cover-art/bsides.jpg"
              cover="true"
              width={680}
              height={680}
              className="rounded-xl"
            />
          </div>
          <div className="flex-col flex w-full mx-auto justify-center py-8  tracking-tight space-y-4">
            {/* <p className="align-middle text-center font-medium">Going live</p> */}
            {launchTime == 'true' ? (
              <div>
                <h1 className="align-middle text-center text-4xl font-bold w-full justify-center uppercase">
                  B-SIDES IS OUT NOW!
                </h1>
                {/* <div className="flex flex-col sm:flex-row w-full items-center align-middle justify-center text-xl sm:text-2xl space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="" className="no-underline">
                  <div className="border-2 border-solid text-black border-neutral-900 items-center rounded-full bg-white sm:hover:bg-neutral-900 sm:hover:border-neutral-900 sm:hover:text-white px-8 py-4 flex space-x-1 transiton-all uppercase duration-200">
                    <FontAwesomeIcon
                      icon={faSpotify}
                      className="w-8 align-middle justify-center text-2xl"
                    />
                    <p>Stream on Spotify</p>
                  </div>
                </a>
                <a href="" className="no-underline">
                  <div className="border-2 border-solid text-black border-neutral-900 items-center rounded-full bg-white sm:hover:bg-neutral-900 sm:hover:border-neutral-900 sm:hover:text-white px-8 py-4 flex space-x-1 transiton-all uppercase duration-200">
                    <FontAwesomeIcon
                      icon={faApple}
                      className="w-8 align-middle justify-center text-2xl"
                    />
                    <p className=" whitespace-nowrap">Stream on Apple Music</p>
                  </div>
                </a>
              </div> */}
              </div>
            ) : (
              <div className="space-y-8">
                <h1 className="align-middle text-center text-4xl font-bold w-full justify-center uppercase">
                  {days} days {hours} hours {minutes} minutes {seconds} seconds
                </h1>
                <div className="flex flex-col sm:flex-row w-full items-center align-middle justify-center text-xl sm:text-2xl space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://distrokid.com/hyperfollow/jacobsblue/born-in-the-sunset-thoughts-to-oasis-b-sides"
                    className="no-underline"
                  >
                    <div className="border-2 border-solid text-black border-neutral-900 items-center rounded-full bg-white sm:hover:bg-neutral-900 sm:hover:border-neutral-900 sm:hover:text-white px-8 py-4 flex space-x-1 transiton-all uppercase duration-200">
                      <FontAwesomeIcon
                        icon={faSpotify}
                        className="w-8 align-middle justify-center text-2xl"
                      />
                      <p>Pre-save on Spotify</p>
                    </div>
                  </a>
                  <a
                    href="https://music.apple.com/us/album/born-in-the-sunset-thoughts-to-oasis-b-sides-ep/1690630303"
                    className="no-underline"
                  >
                    <div className="border-2 border-solid text-black border-neutral-900 items-center rounded-full bg-white sm:hover:bg-neutral-900 sm:hover:border-neutral-900 sm:hover:text-white px-8 py-4 flex space-x-1 transiton-all uppercase duration-200">
                      <FontAwesomeIcon
                        icon={faApple}
                        className="w-8 align-middle justify-center text-2xl"
                      />
                      <p className=" whitespace-nowrap">
                        Pre-save on Apple Music
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
  // return (
  //   <>
  //     <BlogSEO
  //       title={
  //         "Born in the Sunset: Thoughts to Oasis (B-SIDES) by Jacob's Blue coming June 23, 2023"
  //       }
  //       description="Pre-save BSIDES today"
  //       image="cover-art/bsides.jpg"
  //       canonical="/index"
  //     />
  //     {main()}
  //   </>
  // );
}
