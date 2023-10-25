import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const convertBreadcrumb = (string) => {
  return (
    string
      .replace(/-/g, ' ')
      // .replace(/oe/g, 'ö')
      // .replace(/ae/g, 'ä')
      // .replace(/ue/g, 'ü')
      .split('#')[0]
  );
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
    <nav className="">
      <ol className="flex gap-x-1 tracking-tight capitalize">
        <li className="flex md:hidden">
          <Link
            href="/"
            passHref
            className="col-span-1 items-center cursor-pointer"
          >
            <div className="border-white border-2 rounded-full relative p-4 md:p-0 cursor-pointer hover:drop-shadow-lg">
              <Image
                alt="blue gradient"
                src="/logo.png"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </Link>
        </li>
        <li className="hidden md:flex">
          <Link
            href="/"
            className="font-normal whitespace-nowrap underline text-neutral-400 md:hover:text-neutral-900 underline-offset-2 md:hover:underline-offset-4 transition-all"
          >
            Index
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li
              key={breadcrumb.href}
              className="gap-x-1 overflow-ellipsis hidden md:flex"
            >
              <p className="text-neutral-200">/</p>
              <Link
                href={breadcrumb.href}
                className={
                  (i == breadcrumbs.length - 1
                    ? 'w-full whitespace-nowrap'
                    : 'font-normal  md:w-full underline whitespace-nowrap text-neutral-400 md:hover:text-neutral-900 underline-offset-2 md:hover:underline-offset-4 transition-all ') +
                  ''
                }
              >
                {convertBreadcrumb(breadcrumb.breadcrumb)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
