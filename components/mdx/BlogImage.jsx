import Image from 'next/image';
import InlineLinkWrapper from '../wrappers/InlineLinkWrapper';

export default function BlogImage(props) {
  // const bg = props.bg;

  return (
    <div className="pt-6 pb-6 text-base not-prose">
      <div
        className={
          props.bg
            ? `bg-purple-100 rounded-lg aspect-square sm:aspect-video overflow-clip border border-black/10 justify-center border-solid items-center`
            : 'rounded-lg aspect-square sm:aspect-video bg-neutral-50 overflow-clip border border-black/10 justify-center border-solid items-center'
        }
      >
        {props.type === '2' ? (
          <div className="relative mx-auto flex h-full items-center align-middle justify-center w-full z-10">
            <Image
              src={props.src}
              alt={props.alt}
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
        ) : (
          <div className="relative mx-auto flex h-full w-full items-center align-middle justify-center max-w-[280px] sm:max-w-[600px] sm:w-96 z-10">
            <Image
              src={props.src}
              alt={props.alt}
              style={{ objectFit: 'contain' }}
              fill
            />
          </div>
        )}
      </div>
      <figcaption className="pt-4 gap-x-1 flex items-center tracking-normal align-middle mx-auto w-full text-neutral-400 justify-center font-jbd">
        {props.fig}
        {props.extSrc ? (
          <InlineLinkWrapper href={props.extSrc}>
            {props.extSrcCopy}
          </InlineLinkWrapper>
        ) : null}
      </figcaption>
    </div>
  );
}
