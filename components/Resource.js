import Link from 'next/link';
import Image from 'next/image';

export default function Resources(props) {
  return (
    <Link href={props.href} className="" legacyBehavior>
      <div className="flex w-full p-3 bg-neutral-50 rounded-xl items-center justify-between sm:hover:cursor-pointer sm:hover:bg-neutral-100 transition-all duration-150">
        <div className="flex space-x-4 items-center">
          <div className="p-2 flex items-center rounded-lg bg-neutral-200/60 ">
            <div className="flex p-6 relative">
              <Image
                alt={props.imgAlt}
                src={props.imgURL}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
          <div className="flex-block font-mont">
            <p className="text-lg md:text-xl font-medium leading-none">
              {props.title}
            </p>
            <p className="text-sm md:text-base font-thin text-neutral-500">
              {props.tag}
            </p>
          </div>
        </div>
        <span className="material-icons text-3xl pr-2">north_east</span>
      </div>
    </Link>
  );
}
