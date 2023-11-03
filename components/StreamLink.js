import Link from 'next/link';
import Image from 'next/image';
import StreamLinkWrapper from './wrappers/StreamLinkWrapper';

export default function StreamLink(props) {
  const link = props.href;
  // isIncluded;
  // const isIncluded = link.includes('spotify');

  if (String(link).includes('spotify')) {
    return (
      <a href={props.href} className="">
        <StreamLinkWrapper icon="spotify" label="Spotify" bg="bg-green-100" />
      </a>
    );
  } else if (String(link).includes('apple')) {
    return (
      <a href={props.href} className="">
        <StreamLinkWrapper icon="apple" label="Apple Music" bg="bg-red-100" />
      </a>
    );
  } else if (String(link).includes('amazon')) {
    return (
      <a href={props.href} className="">
        <StreamLinkWrapper
          icon="amazon1"
          fill="fill-white"
          label="Amazon Music"
          bg="bg-blue-50"
        />
      </a>
    );
  } else if (String(link).includes('tidal')) {
    return (
      <a href={props.href} className="">
        <StreamLinkWrapper
          icon="tidal-white"
          label="Tidal"
          bg="bg-black/90"
          fill="fill-white/90"
        />
      </a>
    );
  } else if (String(link).includes('soundcloud')) {
    return (
      <a href={props.href} className="">
        <StreamLinkWrapper
          icon="soundcloud"
          label="Soundcloud"
          bg="bg-orange-50"
        />
      </a>
    );
  } else if (String(link).includes('youtube')) {
    return (
      <a href={props.href} className="">
        <StreamLinkWrapper icon="youtube" label="Youtube" bg="bg-red-50" />
      </a>
    );
  } else if (String(link).includes('audiomack')) {
    return (
      <a href={props.href} className="">
        <StreamLinkWrapper
          icon="audiomack"
          label="Audiomack"
          bg="bg-orange-50"
        />
      </a>
    );
  } else if (String(link).includes('gumroad')) {
    return (
      <a href={props.href} className="">
        <StreamLinkWrapper
          icon="gumroad"
          label="Buy directly on Gumroad"
          bg="bg-pink-50"
        />
      </a>
    );
  }
  return <p className="absolute h-0 w-0 top-0">not working</p>;
}
// <Link
//   href={props.href}
//   className="flex p-3 mx-auto border text-lg font-jbd font-normal sm:hover:drop-shadow-sm border-black/10 rounded-lg drop-shadow-sm space-x-3 bg-white cursor-pointer sm:hover:text-black items-center"
// >
//   <div
//     className={`${props.bg}
//     p-1 border rounded-md border-black/10 flex justify-center items-center`}
//   >
//     <Image
//       src={`/icons/${props.icon}.svg`}
//       alt="icon"
//       width={24}
//       height={24}
//     />
//   </div>
//   <p className="">{props.label}</p>
// </Link>
