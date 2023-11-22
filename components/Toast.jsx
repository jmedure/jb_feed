// import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Toast({ text, children }) {
  // const [IsVisible, setIsVisible] = useState(false);

  // c

  // setTimeout(() => {
  //   setIsVisible(false);
  // }, 5000);

  return (
    <div
      // onMouseEnter={() => setIsVisible(true)}
      // onMouseLeave={() => setIsVisible(false)}
      className="flex h-full w-full transition-all relative overflow-visible select-none"
    >
      {children}
      {/* {IsVisible && ( */}
      <motion.div
        initial={{ opacity: 0, translateY: 5 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.2,
          type: 'ease',
          // duration: 0.2,
          stiffness: 100,
        }}
        className="hidden sm:flex flex-row -left-6 whitespace-nowrap overflow-visible drop-shadow-lg text-center justify-center mx-auto -top-8 text-sm px-2 py-1 rounded-lg absolute bg-neutral-800 text-white  z-50"
      >
        {text}
      </motion.div>
      {/* )} */}
    </div>
  );
}
