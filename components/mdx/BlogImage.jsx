import Image from 'next/image';

export default function BlogImage(props) {
  const bg = props.bg;

  if (props.type === 2) {
    return (
      <div className="">
        <div
          className={
            bg
              ? `${bg} rounded-lg aspect-square sm:aspect-video overflow-clip border border-black/10 justify-center border-solid items-center`
              : 'rounded-lg aspect-square sm:aspect-video bg-neutral-50 overflow-clip border border-black/10 justify-center border-solid items-center'
          }
        >
          <div className="relative mx-auto flex h-full items-center align-middle justify-center w-full z-10">
            <Image src={props.src} alt={props.alt} objectFit="cover" fill />
          </div>
        </div>
        <figcaption className="w-full align-middle text-center text-neutral-400 font-jbd">
          {props.fig}
        </figcaption>
      </div>
    );
  }
  return (
    <div className="pt-6 pb-6">
      <div
        className={
          bg
            ? `${bg} rounded-lg aspect-square sm:aspect-video overflow-clip border border-black/10 justify-center border-solid items-center`
            : 'rounded-lg aspect-square sm:aspect-video bg-neutral-50 overflow-clip border border-black/10 justify-center border-solid items-center'
        }
      >
        <div className="relative mx-auto flex h-full w-full items-center align-middle justify-center max-w-[280px] sm:max-w-[600px] sm:w-96 z-10">
          <Image
            src={props.src}
            alt={props.alt}
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
      </div>
      <figcaption className="w-full align-middle text-center text-neutral-400 font-jbd">
        {props.fig}
      </figcaption>
    </div>
  );
}
