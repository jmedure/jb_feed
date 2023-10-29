import YoutubeEmbed from '../YoutubeEmbed';
import Image from 'next/image';

export default function BlogHeroBanner(props) {
  return (
    <div className="flex container-fg w-full max-h-[640px] my-3 space-x-0 mx-auto z-20 mt-24 rounded-xl overflow-clip">
      {props.youtube ? (
        <div className="flex-grow w-full h-full aspect-video">
          <YoutubeEmbed embedId={props.embedID} />
        </div>
      ) : null}
      {props.image ? (
        <div className="relative w-full flex h-full max-h-[640px aspect-video ">
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
