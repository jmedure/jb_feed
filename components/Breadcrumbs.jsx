import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .split('#')[0];
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href:
            '/' +
            linkPath
              .slice(0, i + 1)
              .join('/')
              .split('#')[0],
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav>
      <motion.ol
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          delay: 0.25,
          stiffness: 200,
          duration: 0.5,
        }}
        className="flex space-x-2 tracking-tight capitalize"
      >
        <li>
          <Link
            href="/"
            className="font-normal underline text-neutral-400 sm:hover:text-neutral-900 underline-offset-2 sm:hover:underline-offset-4 transition-all"
          >
            Index
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li key={breadcrumb.href} className="flex space-x-1">
              <p className="text-neutral-200">/</p>
              <Link
                href={breadcrumb.href}
                className={
                  (i == breadcrumbs.length - 1
                    ? ''
                    : 'font-normal underline text-neutral-400 sm:hover:text-neutral-900 underline-offset-2 sm:hover:underline-offset-4 transition-all ') +
                  ''
                }
              >
                {convertBreadcrumb(breadcrumb.breadcrumb)}
              </Link>
            </li>
          );
        })}
      </motion.ol>
    </nav>
  );
};

export default Breadcrumbs;
