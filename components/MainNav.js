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
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          delay: 0.25,
          stiffness: 200,
          duration: 0.5,
        }}
        className="w-full justify-between sm:absolute sm:w-[360px] sm:top-2 sm:left-[calc(50%-180px)] sm:space-x-2 items-center text-lg z-10"
      >
        {/* <p className="flex-grow flex uppercase">Filters</p> */}

        <ul className="flex sm:p-3 rounded-full sm:space-x-1 justify-between ">
          <li className="group transition-visible transition-all z-20">
            <Link
              href="/"
              // whileHover={() => {
              //   return (
              //     <motion.p
              //       initial={{ opacity: 0, translateY: 10 }}
              //       whileHover={{ opacity: 1, translateY: 0 }}
              //       transition={{
              //         type: 'spring',
              //         delay: 0.1,
              //         stiffness: 200,
              //       }}
              //       className="absolute top-0 left-0 font-jbd whitespace-nowrap px-2 py-1 mt-14 select-none  bg-neutral-200 z-10 drop-shadow-lg rounded-md"
              //     >
              //       Filter by <strong className="font-medium">All</strong>{' '}
              //       results
              //     </motion.p>
              //   );
              // }}
              className={`sm:hover:bg-sky-200 sm:hover:text-blue-700 text-neutral-400 border sm:border-none px-3 py-1 rounded-full no-underline ${
                router.pathname == '/' ? 'text-blue-700 bg-sky-300' : ''
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
                router.pathname == '/music' ? ' text-lime-800 bg-lime-300' : ''
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
                  ? 'text-orange-800 bg-orange-300'
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
              className={`sm:hover:bg-amber-200 sm:hover:text-amber-800 border sm:border-none text-neutral-400 px-3 py-1 rounded-full no-underline ${
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
