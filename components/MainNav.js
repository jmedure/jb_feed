import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import useReadingProgress from '../src/utils/useReadingProgress';

export default function MainNav() {
  const router = useRouter();
  const completion = useReadingProgress();

  return (
    <div className="font-jbd font-normal font">
      <motion.div
        // initial={{ opacity: 0, translateY: 10 }}
        // animate={{ opacity: 1, translateY: 0 }}
        // viewport={{ once: true }}
        // transition={{
        //   type: 'spring',
        //   delay: 0.25,
        //   stiffness: 200,
        //   duration: 0.5,
        // }}
        className={
          (completion > 0
            ? 'sm:drop-shadow-2xl sm:bg-white/90 sm:border-neutral-100 sm:border backdrop-blur-sm w-full'
            : 'bg-white drop-shadow-none') +
          'w-full rounded-full transition-all duration-75 sm:fixed justify-between sm:w-[380px] sm:top-2 pt-2 sm:pt-0 sm:left-[calc(50%-190px)] sm:space-x-2 items-center text-lg z-50 '
        }
      >
        {/* <p className="flex-grow flex uppercase">Filters</p> */}

        <ul className="flex sm:p-3 rounded-full sm:space-x-1 justify-between">
          <li className="group transition-visible transition-all z-20">
            <Link
              href="/"
              className={`sm:hover:bg-sky-200 sm:hover:text-blue-700 text-neutral-400 border sm:border-none px-3 py-1 rounded-full no-underline ${
                router.pathname == '/'
                  ? 'text-blue-700 bg-sky-300 transition-all'
                  : ''
              }`}
            >
              All
            </Link>
            {/* <motion.div
              initial={{ opacity: 0, translateY: 0 }}
              whileHover={{ opacity: 1, translateY: -10 }}
              transition={{
                type: 'spring',
                delay: 1,
                stiffness: 200,
              }}
              className="absolute top-0 left-0 font-jbd"
            >
              <p className="whitespace-nowrap px-2 py-1 mt-14 select-none  bg-neutral-200 z-10 drop-shadow-lg rounded-md">
                Filter by <strong className="font-medium">All</strong> results
              </p>
            </motion.div> */}
          </li>
          <li className="group transition-all z-20">
            <Link
              href="/music"
              className={`sm:hover:bg-lime-200  sm:hover:text-lime-800 border sm:border-none text-neutral-400 px-3 py-1 rounded-full no-underline ${
                router.pathname == '/music'
                  ? ' text-lime-800 transition-all duration-200 bg-lime-300'
                  : ''
              }`}
            >
              Music
            </Link>
            {/* <motion.div
              initial={{ opacity: 0, translateY: 0 }}
              whileHover={{ opacity: 1, translateY: -10 }}
              transition={{
                type: 'spring',
                delay: 1,
                stiffness: 200,
              }}
              className="absolute top-0 left-0 font-jbd z-40"
            >
              <p className="whitespace-nowrap px-2 py-1 mt-14 select-none  bg-neutral-200 z-10 drop-shadow-lg rounded-md">
                Filter by <strong className="font-medium">Music</strong> results
              </p>
            </motion.div> */}
          </li>
          <li className="group transition-all">
            <Link
              href="/video"
              className={`sm:hover:bg-orange-200 sm:hover:text-orange-800 border sm:border-none text-neutral-400 px-3 py-1 rounded-full no-underline ${
                router.pathname == '/video'
                  ? 'text-orange-800 transition-all duration-200 bg-orange-300'
                  : ''
              }`}
            >
              Video
            </Link>
            {/* <p className="sm:group-hover:visible invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 rounded-lg">
              Filter by <i>Video</i> results
            </p> */}
          </li>
          <li className="group transition-all">
            <Link
              href="/writing"
              className={`sm:hover:bg-pink-200 sm:hover:text-pink-800 border sm:border-none text-neutral-400 px-3 py-1 rounded-full no-underline ${
                router.pathname == '/writing'
                  ? ' text-pink-800 transition-all duration-200 bg-pink-300'
                  : ''
              }`}
            >
              Journal
            </Link>
            {/* <p className="sm:group-hover:visible invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 rounded-lg">
              Filter by <i>Writing</i> results
            </p> */}
          </li>
          <li className="group transition-all">
            <Link
              href="/design"
              className={`sm:hover:bg-amber-200 sm:hover:text-amber-800 border sm:border-none text-neutral-400 px-3 py-1 rounded-full no-underline ${
                router.pathname == '/design'
                  ? ' text-pink-800 transition-all duration-200 bg-amber-300'
                  : ''
              }`}
            >
              Design
            </Link>
            {/* <p className="sm:group-hover:visible invisible flex py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 rounded-lg">
              Filter by <i>Design</i> results
            </p> */}
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
