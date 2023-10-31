import Image from 'next/image';

export default function BlogImage(props) {
  return (
    <div className="pt-6 pb-6">
      <div className="rounded-lg aspect-square sm:aspect-video bg-neutral-50 overflow-clip border border-black/10 justify-center border-solid items-center">
        <div className="relative mx-auto flex h-full items-center align-middle justify-center w-[300px] sm:w-96 z-10">
          <Image src={props.src} alt={props.alt} objectFit="cover" fill />
        </div>
      </div>
      <figcaption className="w-full align-middle text-center text-neutral-400 font-jbd">
        {props.fig}
      </figcaption>
    </div>
  );
}
