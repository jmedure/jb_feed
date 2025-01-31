import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Tooltip text={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        transition={{ ease: 'linear', duration: 0.01 }}
        onClick={toggleTheme}
        className="group flex sm:hover:bg-white dark:sm:hover:bg-neutral-800 align-middle items-center p-2 w-9 max-h-9 max-w-9 rounded-full bg-neutral-50 dark:bg-neutral-700 transition-all duration-100 border border-black/10 dark:border-white/10 sm:hover:border-black/30 dark:sm:hover:border-white/30 sm:hover:drop-shadow gap-2"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="select-none"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="moon-mask">
                <rect x="0" y="0" width="18" height="18" fill="white" />
                <rect x="9" y="0" width="9" height="18" fill="black" />
              </mask>
            </defs>
            <circle
              cx="9"
              cy="9"
              r="8"
              fill="none"
              className="stroke-neutral-600 dark:stroke-neutral-300 group-hover:stroke-black dark:group-hover:stroke-white"
              strokeWidth="1"
            />
            <circle
              cx="9"
              cy="9"
              r="8"
              mask="url(#moon-mask)"
              className="fill-black/50 dark:fill-neutral-300 group-hover:fill-black dark:group-hover:fill-white"
            />
          </svg>
        </motion.div>
      </motion.button>
    </Tooltip>
  );
}
