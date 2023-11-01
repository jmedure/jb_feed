import { motion } from 'framer-motion';

export default function Footnote({ children, id, number }) {
  return (
    <motion.li
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'ease', duration: 0.2, delay: 0.1 }}
      exit={{ opacity: 1 }}
      id={id}
      className="hidden gap-3 justify-start lg:flex relative h-0 w-64 text-sm text-left -right-[220%] -top-16"
    >
      <p className="text-blue-400">{id}</p>
      {children}
    </motion.li>
  );
}
