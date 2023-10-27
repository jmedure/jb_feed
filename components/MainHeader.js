import MainNav from './MainNav';
import Link from 'next/link';
import Subheader from './Subheader';
import { motion } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';
import CopyLink from './CopyLink';
import Logo from './Logo';
import { useScrollDirection } from '../src/utils/useScrollDirection';
import useReadingProgress from '../src/utils/useReadingProgress';

export default function MainHeader(props) {
  const title = props.title;
  const type = props.type;
  const completion = useReadingProgress();
  // const scrollDirection = useScrollDirection;

  if (type === 'blog') {
    return (
      <div className="w-full py-3 flex-row space-y-2 sm:space-y-0 fixed left-0 top-0 z-30 bg-white to-white">
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            delay: 0.1,
            stiffness: 200,
            duration: 0.5,
          }}
          className="flex container-fg items-center justify-between w-full text-lg font-medium font-jbd"
        >
          <Breadcrumbs />
          <CopyLink />
        </motion.div>
      </div>
    );
  }
  if (type === 'design') {
    return (
      <div className="w-full py-3 flex-row space-y-2 sm:space-y-0 fixed left-0 top-0 z-30">
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            delay: 0.1,
            stiffness: 200,
            duration: 0.5,
          }}
          className="flex container-fg justify-between w-full text-lg font-medium font-jbd"
        >
          <div
            // id="scroller"
            className={
              (completion > 2
                ? 'flex transition-all gap-2 items-center px-2 py-1 mx-auto bg-white rounded-full drop-shadow-lg'
                : 'flex transition-all gap-2 items-center px-2 py-1 mx-auto bg-white rounded-full ') +
              ''
            }
            // className="flex gap-2 items-center px-2 py-1 mx-auto bg-white rounded-full"
          >
            <Logo />
            <CopyLink />
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="flex-wrap bg-white sticky top-0 z-30">
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          delay: 0.1,
          stiffness: 200,
          duration: 0.5,
        }}
        className="container-fg py-3 w-full flex-row"
      >
        <div className="flex items-center justify-between w-full text-lg font-medium font-jbd">
          {title ? (
            <Breadcrumbs />
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-1 w-auto">
              <Link
                href="/"
                className="text-xl flex cursor-pointer group transition-all space-x-1 items-center tracking-tight"
              >
                <h1 className="">
                  Jacob&#39;s{' '}
                  <span className="sm:group-hover:text-blue-500 transition-all">
                    Blue
                  </span>
                </h1>
              </Link>
              <Subheader />
            </div>
          )}
          <Link
            href="#footer"
            className="text-lg  underline underline-offset-2 sm:hover:underline-offset-4 decoration-neutral-200 transition-all sm:hover:decoration-black font-medium cursor-pointer px-1 py-2"
          >
            More
          </Link>
        </div>
        {!title ? <MainNav /> : null}
      </motion.div>
    </div>
  );
}

{
  /* <Link href="#footer" className="">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ ease: 'linear', duration: 0.01 }}
            className="fill-blue-600 hover:fill-blue-700 p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-all border border-blue-200 ring-1 ring-white hover:ring-blue-400 hover:drop-shadow-sm"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.18432 5.02315C4.18432 6.87267 5.68365 8.37199 7.53316 8.37199C9.38267 8.37199 10.882 6.87267 10.882 5.02315C10.882 3.17364 9.38267 1.67432 7.53316 1.67432C5.68365 1.67432 4.18432 3.17364 4.18432 5.02315Z" />
              <path d="M19.2541 5.02315C19.2541 6.87267 17.7548 8.37199 15.9053 8.37199C14.0557 8.37199 12.5564 6.87267 12.5564 5.02315C12.5564 3.17364 14.0557 1.67432 15.9053 1.67432C17.7548 1.67432 19.2541 3.17364 19.2541 5.02315Z" />
              <path d="M4.18432 18.9766C4.18432 20.8262 5.68365 22.3255 7.53316 22.3255C9.38267 22.3255 10.882 20.8262 10.882 18.9766C10.882 17.1271 9.38267 15.6278 7.53316 15.6278C5.68365 15.6278 4.18432 17.1271 4.18432 18.9766Z" />
              <path d="M19.2541 18.9766C19.2541 20.8262 17.7548 22.3255 15.9053 22.3255C14.0557 22.3255 12.5564 20.8262 12.5564 18.9766C12.5564 17.1271 14.0557 15.6278 15.9053 15.6278C17.7548 15.6278 19.2541 17.1271 19.2541 18.9766Z" />
              <path d="M0.277344 11.9999C0.277344 13.8494 1.77667 15.3487 3.62618 15.3487C5.47569 15.3487 6.97502 13.8494 6.97502 11.9999C6.97502 10.1504 5.47569 8.65106 3.62618 8.65106C1.77667 8.65106 0.277344 10.1504 0.277344 11.9999Z" />
              <path d="M23.7192 11.9999C23.7192 13.8494 22.2199 15.3487 20.3704 15.3487C18.5209 15.3487 17.0215 13.8494 17.0215 11.9999C17.0215 10.1504 18.5209 8.65106 20.3704 8.65106C22.2199 8.65106 23.7192 10.1504 23.7192 11.9999Z" />
            </svg>
          </motion.button>
        </Link> */
}
{
  /* </>
            );
          })} */
}
