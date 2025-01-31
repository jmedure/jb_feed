import React from 'react';
import Link from 'next/link';

export default function InlineLinkWrapper({ href, children }) {
  if (String(href).includes('https')) {
    return (
      <a
        href={href}
        className="underline group text-black/70 dark:text-white/70 underline-offset-2 decoration-[1px] hover:underline-offset-4 transition-all hover:text-black dark:hover:text-white dark:decoration-white/20 decoration-black/20 hover:decoration-black"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="underline text-black/70 dark:text-white/70 underline-offset-2 decoration-[1px] hover:underline-offset-4 transition-all hover:text-black decoration-black/20 dark:hover:text-white hover:decoration-black dark:decoration-white/20"
    >
      {children}
    </Link>
  );
}
