import { useState } from 'react';
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';
import Link from 'next/link';

export default function BackArrow() {
  return (
    <div className="group flex align-middle ">
      <Tooltip text={'./'}>
        <Link href={'./'}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ ease: 'linear', duration: 0.01 }}
            className="group fill-black/50 flex sm:hover:bg-white align-middle items-center p-2 w-9 max-h-9 max-w-9 rounded-full bg-white/80 transition-all duration-100 border border-black/10 hover:border-black/30 hover:drop-shadow gap-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className=" fill-inherit stroke-inherit select-none"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="inherit"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.29843 9.59998L9.85536 14.1569L9 15L3 9L9 3L9.85536 3.84306L5.29843 8.40002H15V9.59998H5.29843Z"
                  fill="black"
                />
              </svg>
            </motion.div>
          </motion.button>
        </Link>
      </Tooltip>
    </div>
  );
}
