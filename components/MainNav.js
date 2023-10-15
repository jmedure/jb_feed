import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function MainNav() {
  const router = useRouter();

  return (
    <div className="flex font-jbd font-normal font">
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          delay: 1.5,
          stiffness: 200,
          duration: 0.5,
        }}
        className="absolute max-w-[350px] top-2 left-[calc(50%-175px)] flex w-full space-x-2 items-center text-lg z-10"
      >
        {/* <p className="flex-grow flex uppercase">Filters</p> */}

        <ul className="flex p-2 rounded-full space-x-1">
          <li className="group transition-visible">
            <Link
              href="/"
              className={`sm:hover:bg-sky-200 sm:hover:text-blue-700 text-neutral-400 px-3 py-1 rounded-full no-underline ${
                router.pathname == '/' ? 'text-blue-700 bg-sky-300  -xl' : ''
              }`}
            >
              All
            </Link>
            {/* <p className="sm:group-hover:visible duration-100 group-hover:delay-300 invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 rounded-lg">
              Filter by <i>All</i> results
            </p> */}
          </li>
          <li className="group transition-all">
            <Link
              href="/music"
              className={`sm:hover:bg-lime-200  sm:hover:text-lime-800 sm:hover: -xl  -neutral-400 text-neutral-400 px-3 py-1 rounded-full no-underline ${
                router.pathname == '/music'
                  ? ' text-lime-800 bg-lime-300  -xl'
                  : ''
              }`}
            >
              Music
            </Link>
            {/* <p className="sm:group-hover:visible invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 rounded-lg">
              Filter by <i>Music</i> results
            </p> */}
          </li>
          <li className="group transition-all">
            <Link
              href="/video"
              className={`sm:hover:bg-orange-200 sm:hover:text-orange-800 text-neutral-400 px-3 py-1 rounded-full no-underline ${
                router.pathname == '/video'
                  ? ' -solid   ring-1  -x-orange-600  -y-orange-600 text-orange-800 bg-orange-300  -xl'
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
              className={`sm:hover:bg-pink-200 sm:hover:text-pink-800 text-neutral-400 px-3 py-1 rounded-full no-underline ${
                router.pathname == '/writing'
                  ? ' text-pink-800 bg-pink-300'
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
              className={`sm:hover:bg-amber-200 sm:hover:text-amber-800 text-neutral-400 px-3 py-1 rounded-full no-underline ${
                router.pathname == '/design'
                  ? ' text-pink-800 bg-amber-300'
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
