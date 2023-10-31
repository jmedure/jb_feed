import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';

export default function Logo() {
  return (
    <motion.div whileTap={{ scale: 0.9 }} className="">
      <Tooltip text={'/index'}>
        <Link
          href="/"
          passHref
          className="col-span-1 items-center cursor-pointer select-none"
        >
          <div className="border-black/10 sm:hover:border-black/30 border-2 rounded-full relative p-4 cursor-pointer transition-all m:hover:drop-shadow-md">
            <Image
              alt="blue gradient"
              src="/logo.png"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </Link>
      </Tooltip>
    </motion.div>
  );
}
