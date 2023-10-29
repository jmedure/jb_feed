import { easeIn, motion } from 'framer-motion';
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
        when: 'afterChildren',
        delay: 0.5,
        duration: 0.3,
        type: 'ease',
        // stiffness: 100,
      }}
      className="hidden lg:flex sticky top-36 h-0"
    >
      <div className="relative -left-40 top-4 xl:-left-60 whitespace-nowrap h-min w-min">
        <div className="flex flex-col w-full">
          <Link
            href={sluggy}
            className=" absolute flex -top-10 transition-all font-medium tracking-tight py-1 text-base font-jbd capitalize text-neutral-600 hover:text-neutral-800 "
          >
            {completion > 20 ? (
              <motion.div
                initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, transalateY: 0 }}
                transition={{
                  type: 'ease',
                  duration: 0.2,
                  stiffness: 200,
                  when: 'afterChildren',
                }}
              >
                <p>{props.title}</p>
                <div className=" mt-2 w-6 h-[2px] rounded-full bg-black/20"></div>
              </motion.div>
            ) : null}
          </Link>
          {toc.map((heading, index) => {
            const clean = heading.replace(/-/g, ' ');
            return (
              <Link
                href={sluggy + '#' + heading}
                key={index}
                className="font-normal tracking-tight py-1 text-base font-jbd capitalize text-neutral-400 hover:text-neutral-800 transition-all"
              >
                {clean}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
