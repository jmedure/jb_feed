import Link from 'next/link';
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';
import AnimatedLogo from './AnimatedLogo';

export default function Logo() {
  return (
    <Tooltip text={'/index'}>
      <motion.div whileTap={{ scale: 0.96 }} className="select-none">
        <Link
          href="/"
          passHref
          className="col-span-1 items-center cursor-pointer rounded-full"
        >
          <div className="border-black/10 sm:hover:border-black/30 p-0 dark:border-white/20 dark:sm:hover:border-white/50 border rounded-full relative cursor-pointer transition-all sm:hover:drop-shadow ease-in-out">
            <AnimatedLogo />
          </div>
        </Link>
      </motion.div>
    </Tooltip>
  );
}
