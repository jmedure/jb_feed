import { motion } from 'framer-motion';

export default function MotionListWrapper({ children }) {
  <motion.li
    initial={{ opacity: 0, translateY: 10 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{
      when: 'afterChildren',
      delay: index * 0.1,
      duration: 0.2,
      type: 'spring',
      stiffness: 200,
    }}
  >
    {children}
  </motion.li>;
}
