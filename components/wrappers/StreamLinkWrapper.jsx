import Image from 'next/image';

export default function StreamLinkWrapper(props) {
  return (
    <div className="flex p-3 mx-auto border text-lg font-jbd font-normal sm:hover:shadow-sm border-black/10 rounded-lg shadow shadow-black/05 space-x-3 bg-white cursor-pointer text-black/80 sm:hover:text-black hover:bg-neutral-50 items-center transition-all sm:hover:border-black/20 duration-200">
      <div
        className={`${props.bg} ${props.fill} min-h-4 min-w-4 p-[1px] border rounded-md border-black/10 flex justify-center items-center`}
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
