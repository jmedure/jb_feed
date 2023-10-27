import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" passHref className="col-span-1 items-center cursor-pointer">
      <div className="border-black/10 sm:hover:border-black/30 border-2 rounded-full relative p-4 cursor-pointer transition-all m:hover:drop-shadow-md">
        <Image
          alt="blue gradient"
          src="/logo.png"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </Link>
  );
}
