import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Tooltip({ text, children }) {
  const [IsVisible, setIsVisible] = useState(false);

  setTimeout(() => {
    setIsVisible(false);
  }, 5000);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="flex transition-all overflow-visible relative z-40 bg-transparent"
    >
      {children}
      {IsVisible && (
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'ease',
            delay: 0.5,
            duration: 0.2,
            stiffness: 200,
          }}
          id={text}
          className="absolute  -translate-y-[250%] top-full left-1/2 -translate-x-1/2 whitespace-nowrap drop-shadow-lg text-center items-center justify-center text-sm px-2 py-1 rounded-lg bg-neutral-900 text-white z-20"
        >
          {text}
        </motion.div>
      )}
    </div>
  );
}
