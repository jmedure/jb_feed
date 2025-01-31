import MainNav from './MainNav';
import Link from 'next/link';
import Subheader from './Subheader';
import { motion, useScroll } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';
import CopyLink from './CopyLink';
import Logo from './Logo';
import useReadingProgress from '../src/utils/useReadingProgress';
import BackArrow from './BackArrow';
import useScreenSize from '../src/utils/useScreenSize';
import { useTheme } from 'next-themes';
import ThemeSwitcher from './ThemeSwitcher';

export default function MainHeader(props) {
  const { theme } = useTheme();
  const title = props.title;
  const type = props.type;
  const completion = useReadingProgress();
  const screen = useScreenSize();
  const { scrollYProgress } = useScroll();

  const headerClass = `
    bg-white dark:bg-neutral-900 text-black dark:text-white
    w-full py-3 flex-row space-y-2 sm:space-y-0 fixed left-0 top-0 z-30
  `;

  if (type === 'blog') {
    return (
      <div className={headerClass}>
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            delay: 0.1,
            stiffness: 200,
            duration: 0.5,
          }}
          className="flex container-fg items-center justify-between w-full text-lg font-medium font-jbd"
        >
          <Breadcrumbs />
          <CopyLink type="text" />
        </motion.div>
      </div>
    );
  }
  if (type === 'design') {
    return (
      <div className="fixed w-full py-6 sm:py-8 flex-row left-0 top-0 z-40 dark:to-neutral-900 to-white bg-gradient-to-t from-transparent">
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            delay: 0.1,
            stiffness: 200,
            duration: 0.5,
          }}
          className="flex container-fg justify-between w-full text-lg font-medium gap-1 font-jbd"
        >
          {props.buttons ? (
            <div className="flex transition-all items-center justify-between p-1 mx-auto w-full">
              {/* <BackArrow /> */}
              <Logo />
              <div className="flex gap-2">
                <ThemeSwitcher />
                <CopyLink />
              </div>
            </div>
          ) : (
            <div
              className={
                (completion > 2
                  ? 'flex transition-all items-center  mx-auto dark:bg-neutral-900 bg-white border-black/5 border rounded-full drop-shadow-xl'
                  : 'flex transition-all items-center  mx-auto dark:bg-neutral-900 bg-white border border-black/0 rounded-full ') +
                ''
              }
            >
              <Logo />
            </div>
          )}
        </motion.div>
      </div>
    );
  }
  return (
    <div
      className={`
        flex-wrap bg-white dark:bg-neutral-900 z-40
        ${screen.width > 600 && !title ? '' : 'sticky top-0'}
      `}
    >
      <motion.div className="container-fg py-3 w-full flex-row">
        <div className="flex items-center justify-between w-full text-lg font-medium font-jbd">
          {title ? (
            <Breadcrumbs />
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-1 w-auto">
              <Link
                href="/"
                className="text-xl flex cursor-pointer group transition-all space-x-1 items-center tracking-tight"
              >
                <h1 className="">
                  Jacob&#39;s{' '}
                  <span className="sm:group-hover:text-blue-500 transition-all">
                    Blue
                  </span>
                </h1>
              </Link>
              <Subheader />
            </div>
          )}
          <Link
            href="#footer"
            className="text-lg underline underline-offset-2 sm:hover:underline-offset-4 decoration-neutral-700 transition-all sm:hover:decoration-black font-medium cursor-pointer px-1 py-2"
          >
            More
          </Link>
        </div>
        {!title ? <MainNav /> : null}
      </motion.div>
    </div>
  );
}
