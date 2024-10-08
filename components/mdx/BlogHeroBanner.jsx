import YoutubeEmbed from '../YoutubeEmbed';
import Image from 'next/image';

export default function BlogHeroBanner(props) {
  if (props.image || props.youtube) {
    return (
      <div className="flex container-fg w-full max-w-[1200px] max-h-[640px] sm:mt-20 mt-8 px-2 mx-auto z-10">
        <div className="flex h-full w-full border border-black/10 aspect-video rounded-xl overflow-clip">
          {props.youtube ? (
            <div className="flex-grow aspect-video">
              <YoutubeEmbed embedId={props.embedID} />
            </div>
          ) : null}
          {props.image ? (
            <div className="relative w-full -z-40 flex h-full aspect-video rounded-xl overflow-clip">
              <Image
                src={props.image}
                priority
                alt={props.alt}
                placeholder="blur"
                blurDataURL="https://jacobs.blue"
                style={{ objectFit: 'fit', objectPosition: 'center' }}
                fill
                sizes="auto"
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  } else return null;
}
