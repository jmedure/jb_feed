import Link from 'next/link';

export default function Tracklist(props) {
  return (
    <Link
      href={props.href}
      className="flex not-prose p-3 border text-lg font-jbd font-normal sm:hover:shadow-sm border-black/10 rounded-lg shadow shadow-black/05 bg-white cursor-pointer text-black/80 sm:hover:text-black justify-between sm:hover:bg-neutral-50 items-center transition-all sm:hover:border-black/20 duration-200"
    >
      <div className="flex items-center space-x-2">
        <p className="text-black/70">{props.order}</p>
        <div className="flex items-center">
          <p>{props.label}</p>
          {props.explicit ? (
            <span className="text-xs w-5 h-5 bg-black/10 flex ml-2 px-[6px] py-[2.5px] rounded">
              E
            </span>
          ) : null}
        </div>
      </div>
      <p className="text-black/50">{props.time}</p>
    </Link>
  );
}
