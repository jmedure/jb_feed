import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StreamLinkWrapper(props) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className="flex p-3 mx-auto group border text-lg font-jbd font-normal sm:hover:drop-shadow-sm border-black/10 rounded-lg drop-shadow space-x-3 bg-white cursor-pointer text-black/70 sm:hover:text-black bg-gradient-to-tr to-white hover:from-white/50 items-center transition-all sm:hover:border-black/20"
    >
      <div
        className={`${props.bg} ${props.fill} duration-100 transition-all  sm:group-hover:border-black/20 min-h-4 min-w-4 p-[1px] border rounded-md border-black/10 flex justify-center items-center`}
      >
        <Image
          src={`/icons/${props.icon}.svg`}
          alt="icon"
          width={32}
          height={32}
          className={`${props.fill}'fill-red-800'`}
        />
      </div>
      <p>{props.label}</p>
    </motion.div>
  );
}
