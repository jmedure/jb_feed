import YoutubeEmbed from '../YoutubeEmbed';
import Image from 'next/image';

export default function BlogHeroBanner(props) {
  return (
    <div className="flex container-fg w-full my-3 space-x-0 mx-auto z-20 pt-10">
      {props.youtube ? (
        <div className="flex-grow w-full h-full hover:drop-shadow-lg overflow-hidden aspect-video">
          <YoutubeEmbed embedId={props.embedID} />
        </div>
      ) : null}
      {props.image ? (
        <div className="relative w-full flex aspect-video">
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
