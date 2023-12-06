import React from 'react';
import Link from 'next/link';

export default function InlineLinkWrapper({ href, children }) {
  if (String(href).includes('https')) {
    return (
      <a
        href={href}
        className="underline text-black/70 underline-offset-2 decoration-[1px] hover:underline-offset-4 transition-all hover:text-black decoration-black/20 hover:decoration-black"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="underline text-black/70 underline-offset-2 decoration-[1px] hover:underline-offset-4 transition-all hover:text-black decoration-black/20 hover:decoration-black"
    >
      {children}
    </Link>
  );
}
