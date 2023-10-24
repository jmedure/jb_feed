import Image from 'next/image';

export default function StreamLinkWrapper(props) {
  return (
    <div className="flex p-3 mx-auto border text-lg font-jbd font-normal sm:hover:drop-shadow-lg border-black/10 rounded-lg drop-shadow  space-x-3 bg-white cursor-pointer text-black/80 sm:hover:text-black items-center transition-all sm:hover:border-black/20">
      <div
        className={`${props.bg} p-[1px] fill-white border rounded-md border-black/10 flex justify-center items-center`}
      >
        <Image
          src={`/icons/${props.icon}.svg`}
          alt="icon"
          width={32}
          height={32}
        />
      </div>
      <p>{props.label}</p>
    </div>
  );
}
