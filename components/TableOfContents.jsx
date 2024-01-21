import { motion } from 'framer-motion';
import Link from 'next/link';
import useReadingProgress from '../src/utils/useReadingProgress';

export default function TableOfContents(props) {
  const toc = props.toc;
  const sluggy = props.slug;
  const completion = useReadingProgress();

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.3,
        type: 'ease',
      }}
      className="hidden lg:flex sticky top-[8.2rem] w-auto h-0 z-40"
    >
      <div className="relative xl:left-[calc(50%-600px)] h-min w-min max-w-[140px]">
        <div className="flex flex-col w-full">
          <Link
            href={sluggy}
            className="flex transition-all tracking-tight text-base font-jbd text-black"
          >
            {completion >= 10 ? (
              <motion.div
                initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, transalateY: 0 }}
                transition={{
                  type: 'spring',
                  duration: 0.2,
                  stiffness: 200,
                }}
                className="absolute -top-[32px]"
              >
                <p className="w-36 text-left align-bottom truncate overflow-hidden flex-wrap">
                  {/* {props.title} */}
                  Back to top ↑
                </p>
              </motion.div>
            ) : null}
          </Link>
          <div className="flex flex-col w-full z-10 ">
            {toc.map((heading, index) => {
              const clean = heading.replace(/-/g, ' ');
              return (
                <Link
                  href={sluggy + '#' + heading}
                  key={index}
                  className="font-normal whitespace-nowrap tracking py-1 text-base font-jbd capitalize text-neutral-400 hover:text-neutral-900 transition-all"
                >
                  {clean}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
