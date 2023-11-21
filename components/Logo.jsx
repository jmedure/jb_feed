import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';
import logo from '../public/logo.png';

export default function Logo() {
  return (
    <Tooltip text={'/index'}>
      <motion.div whileTap={{ scale: 0.9 }} className="">
        <Link
          href="/"
          passHref
          className="col-span-1 items-center cursor-pointer select-none"
        >
          <div className="border-black/10 sm:hover:border-black/30 bg-white border rounded-full relative cursor-pointer transition-all sm:hover:drop-shadow">
            <Image
              priority
              alt="blue gradient"
              src={logo}
              height={36}
              width={36}
              placeholder="blur"
            />
          </div>
        </Link>
      </motion.div>
    </Tooltip>
  );
}
