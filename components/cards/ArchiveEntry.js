import Link from 'next/link';
import Image from 'next/legacy/image';

export default function ArchiveEntry(props) {
  return (
    <a
      href={props.href}
      className="group not-prose no-underline font-jbd font-normal tracking-tight w-full"
    >
      <div className="p-3 transition-all space-y-2 w-full hover:bg-blue-200 bg-blue-50 border border-blue-100 rounded-xl text-black">
        <div className="w-full relative h-full border border-blue-100 overflow-hidden rounded-xl sm:aspect-video">
          <Image
            src={props.src}
            alt={props.alt}
            placeholder="blur"
            objectFit="cover"
            layout="fill"
            blurDataURL="https://jacobs.blue"
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="capitalize md:text-2xl">{props.label}</h2>
          <p>{props.year}</p>
        </div>
      </div>
    </a>
  );
}
