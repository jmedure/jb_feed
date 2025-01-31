import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import useReadingProgress from '../src/utils/useReadingProgress';
import { useTheme } from 'next-themes';

export default function TableOfContents(props) {
  const toc = props.toc;
  const sluggy = props.slug;
  const completion = useReadingProgress();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeId, setActiveId] = useState('');
  const [hoveredId, setHoveredId] = useState(null);
  const observerRef = useRef({});

  const [glowStyle, setGlowStyle] = useState({});
  const [isGlowVisible, setIsGlowVisible] = useState(false);
  const glowRef = useRef(null);
  const itemsRef = useRef([]);

  const [isFirstEnter, setIsFirstEnter] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const options = {
      rootMargin: '0px 0px -40% 0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(callback, options);
    headings.forEach((heading) => {
      observer.observe(heading);
      observerRef.current[heading.id] = observer;
    });

    return () => {
      const currentObservers = observerRef.current;
      Object.values(currentObservers).forEach((observer) =>
        observer.disconnect()
      );
    };
  }, []);

  const updateGlowPosition = useCallback((e, index) => {
    if (itemsRef.current[index]) {
      const item = itemsRef.current[index];
      const rect = item.getBoundingClientRect();
      const parentRect = item.parentElement.getBoundingClientRect();

      const x = e.clientX - parentRect.left;
      const y = e.clientY - rect.top;

      setGlowStyle({
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        top: `${rect.top - parentRect.top}px`,
        left: '0px',
        '--mouse-x': `${x}px`,
        '--mouse-y': `${y}px`,
      });
      setIsGlowVisible(true);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.3,
        type: 'ease',
      }}
      className="hidden lg:flex sticky top-[10rem] w-auto h-0 z-40"
    >
      <div className="relative xl:left-[calc(50%-600px)] h-min w-min max-w-[140px]">
        <div className="flex flex-col w-full">
          <Link
            href={sluggy}
            className="flex transition-all w-min tracking-tight text-base font-jbd text-black dark:text-neutral-400 hover:dark:text-white"
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
                <p className=" text-left align-bottom truncate flex-wrap">
                  {/* {props.title} */}
                  Back to top ↑
                </p>
              </motion.div>
            ) : null}
          </Link>
          <div
            className="flex flex-col w-full z-10 group relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setIsGlowVisible(false);
              setIsFirstEnter(true);
            }}
          >
            <AnimatePresence>
              {isHovering && isGlowVisible && (
                <motion.div
                  ref={glowRef}
                  className="toc-glow-effect"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={glowStyle}
                />
              )}
            </AnimatePresence>
            {toc.map((heading, index) => {
              const clean = heading.replace(/-/g, ' ');
              const isActive = activeId === heading;
              const isHovered = hoveredId === heading;
              return (
                <Link
                  href={sluggy + '#' + heading}
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  onMouseEnter={(e) => {
                    setHoveredId(heading);
                    updateGlowPosition(e, index);
                  }}
                  onMouseMove={(e) => updateGlowPosition(e, index)}
                  onMouseLeave={() => {
                    setHoveredId(null);
                    setIsFirstEnter(true);
                    if (glowRef.current) {
                      glowRef.current.style.opacity = '0';
                    }
                  }}
                  className={`relative font-normal whitespace-nowrap tracking py-1 text-base font-jbd capitalize 
                    transition-all duration-200 toc-item ${
                      isHovered ? 'toc-item-hovered' : ''
                    }`}
                >
                  <motion.span
                    initial={false}
                    animate={{
                      color: isHovered
                        ? 'var(--color-text-hover)'
                        : hoveredId && !isHovered
                        ? 'var(--color-text-dimmed)'
                        : isActive
                        ? 'var(--color-text-active)'
                        : 'var(--color-text-default)',
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >
                    {clean}
                  </motion.span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
