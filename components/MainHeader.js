import MainNav from './MainNav';
import Link from 'next/link';
import Subheader from './Subheader';
import { motion } from 'framer-motion';

export default function MainHeader() {
  return (
    <div
      style={
        {
          // transform: `translateY(${scrollDirection === 'down' ? 0 : '100%'})`,
          // transform: `translateY(${scrollDirection === 'down' ? 0 : '10px'})`
        }
      }
      className="container-fg py-2 w-full"
    >
      <div className="text-xl font-normal font-jbd flex justify-between w-full items-center ">
        <div className="flex items-center space-x-1 w-auto">
          <Link
            href="/"
            className="flex cursor-pointer group transition-all space-x-1 items-center tracking-tight"
          >
            <p className="">Jacob&#39;s</p>
            <p className="group-hover:text-sky-600 transition-all ">Blue</p>
          </Link>
          <Subheader />
        </div>
        <MainNav />
        {/* <Link
            href="#footer"
            className="text-blue-500 underline underline-offset-2 decoration-neutral-500 hover:decoration-black font-medium cursor-pointer pl-2 py-2 z-20"
          >
            Explore
          </Link> */}
        <Link href="#footer" className="">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ ease: 'linear', duration: 0.01 }}
            className="fill-black p-2 rounded-full bg-black/5  hover:bg-white transition-all border border-black/20 hover:drop-shadow"
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
        </Link>
        {/* </>
            );
          })} */}
      </div>
    </div>
  );
}
