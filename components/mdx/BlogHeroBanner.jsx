import YoutubeEmbed from '../YoutubeEmbed';
import Image from 'next/image';

export default function BlogHeroBanner(props) {
  return (
    <div className="flex container-fg w-full h-full max-h-[640px] mt-16 border-black/10 space-x-0 mx-auto not-prose z-10 rounded-xl overflow-clip">
      {props.youtube ? (
        <div className="flex-grow aspect-video">
          <YoutubeEmbed embedId={props.embedID} />
        </div>
      ) : null}
      {props.image ? (
        <div className="relative w-full -z-40 flex h-full border-10 border-red-500  aspect-video ">
          <Image
            src={props.image}
            alt={props.alt}
            placeholder="blur"
            blurDataURL="https://jacobs.blue"
            objectFit="cover"
            layout="fill"
          />
        </div>
      ) : null}
    </div>
  );
}
