import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StreamLinkWrapper(props) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className="flex p-3 mx-auto group border text-lg font-normal sm:hover:drop-shadow-sm border-black/10 dark:border-white/10 rounded-lg drop-shadow space-x-3 bg-white dark:bg-neutral-900 cursor-pointer text-black/70 dark:text-white/70 sm:hover:text-black dark:sm:hover:text-white hover:bg-gradient-to-tr hover:to-neutral-100 dark:hover:to-neutral-800 hover:from-white/50 dark:hover:from-neutral-900 items-center transition-all duration-200 sm:hover:border-black/20 dark:sm:hover:border-white/20"
    >
      <div
        className={`${props.bg} ${props.fill} duration-100 transition-all sm:group-hover:border-black/20 min-h-4 min-w-4 p-[1px] border rounded-md border-black/10 flex justify-center items-center`}
      >
        <Image
          src={`/icons/${props.icon}.svg`}
          alt="icon"
          width={32}
          height={32}
          className={`${props.fill} 'fill-red-800'`}
        />
      </div>
      <p>{props.label}</p>
    </motion.div>
  );
}
