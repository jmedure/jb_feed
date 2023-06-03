import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/legacy/image';
import YoutubeEmbed from './YoutubeEmbed';
import { data } from 'autoprefixer';
import BubbleLink from './BubbleLink';
import { motion } from 'framer-motion';
import PrimaryButton from './PrimaryButton';
import {
  faDiscord,
  faYoutube,
  faApple,
  faInstagram,
  faTwitter,
  faTiktok,
  faSpotify,
  faSoundcloud,
  faDeezer,
  faNapster,
  faTwitch,
  faPatreon,
  faFigma,
  faGithub,
  faBehance,
  faDribbble,
  faMedium,
  faItunes,
} from '@fortawesome/free-brands-svg-icons';
// import RelativeDate from './RelativeDate';

export const Post = ({ post }) => {
  const {
    title,
    link,
    kind,
    description,
    image,
    youtubeEmbed,
    youtube,
    soundcloud,
    spotify,
    apple,
    amazon,
    tidal,
    cta,
    audiomack,
    date,
  } = post;

  // function Relative(props) {}

  const extras = () => {
    if (kind === 'video') {
      return (
        <div className="flex mt-4 flex-col justify-between items-end lg:pt-0">
          <PrimaryButton href={link} label={cta} mui="north_east" />
        </div>
      );
    }
    if (kind === 'writing') {
      return (
        <div className="flex mt-4 flex-row justify-between items-end lg:pt-0">
          <PrimaryButton href={link} label={cta} mui="east" />
        </div>
      );
    }
    if (kind === 'music') {
      return (
        <div className="flex mt-4 flex-col justify-between items-end lg:pt-0">
          <PrimaryButton href={link} label={cta} mui="east" />
        </div>
      );
    }
    if (kind === 'merch') {
      return (
        <div className="flex mt-4 flex-row justify-between items-end lg:pt-0">
          <div className="flex-grow flex-auto ">
            <div className="flex items-center justify-start justify-items-center flex-wrap">
              <BubbleLink href={link} label="Peep the merch" mui="north_east" />
            </div>
          </div>
        </div>
      );
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  // const timeString = intlFormatDistance(props.date, new Date());

  return (
    <a href={link} className="no-underline font-mont w-full">
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ type: 'spring', stiffness: 100 }}
        className="p-2 group border border-solid border-black/10 sm:hover:border-black/20 duration-200 space-y-2 mb-4 w-full sm:hover:bg-neutral-50 bg-neutral-100 rounded-[2em] md:rounded-[32px] text-black transition-all"
      >
        {image ? (
          <div className="w-full border border-solid transition-all border-black/10 relative h-full overflow-hidden aspect-square rounded-[1.8em] sm:rounded-[2.5em] md:rounded-[32px] sm:aspect-video ">
            <div className="sm:group-hover:scale-[1.05] relative h-full transition-all duration-500">
              <Image
                src={image}
                alt="random"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="https://images.unsplash.com/photo-1631200472313-ad91fd825080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80"
              />
            </div>
          </div>
        ) : null}

        {youtubeEmbed ? (
          <div className="w-full mb-2 relative h-full  aspect-square rounded-[1.8em] sm:rounded-[2.5em] md:rounded-[32px] overflow-hidden sm:aspect-video">
            <YoutubeEmbed embedId={youtubeEmbed} />
          </div>
        ) : null}

        <div className="flex flex-col bg-neutral-200 rounded-[30px] overflow-hidden">
          <div className="flex justify-between items-start sm:space-x-4 p-4 sm:space-y-0 gap-y-2 flex-col-reverse sm:flex-row">
            <h2 className="text-4xl leading-none tracking-tight sm:tracking-tighter">
              {title}
            </h2>
            <div className="flex space-x-2 text-lg capitalize text-black/60 sm:pt-1">
              <p className="">{kind}</p>
              {date ? (
                <div className="flex space-x-2 ">
                  <p className="">•</p>
                  <p className=" whitespace-nowrap">{date}</p>
                </div>
              ) : null}
              {/* <RelativeDate date={date} /> */}
            </div>
            {/* {description ? (
              <p className="truncate sm:text-2xl text-base md:text-3xl md:tracking-tight lg:text-4xl sm:py-4 md:py-6 lg:py-6 py-2">
                {description}
              </p>
            ) : null} */}
          </div>
          {spotify ? (
            <div className="flex items-center justify-start scroll-x pl-2 space-x-1 sm:space-x-2 pb-2 overflow-x-auto no-scrollbar justify-items-center">
              <BubbleLink href={spotify} label="spotify" icon={faSpotify} />
              <BubbleLink href={apple} label="apple music" icon={faApple} />
              <BubbleLink href={youtube} label="youtube" icon={faYoutube} />
              <BubbleLink href={tidal} label="tidal" img="/icons/Tidal.svg" />
              <BubbleLink
                href={soundcloud}
                label="soundcloud"
                icon={faSoundcloud}
              />
              <BubbleLink
                href={amazon}
                label="amazon"
                img="/icons/Amazon.svg"
              />

              {/* <BubbleLink
                href={audiomack}
                label="Audiomack"
                img="/icons/Audiomack.svg"
              /> */}
              {/* <BubbleLink href={link} label="more" mui="east" /> */}
            </div>
          ) : null}
        </div>
        {extras()}
      </motion.div>
    </a>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  kind: PropTypes.string,
  isPublished: PropTypes.bool,
  image: PropTypes.string,
  youtubeEmbed: PropTypes.string,
  youtube: PropTypes.string,
  spotify: PropTypes.string,
  apple: PropTypes.string,
  tidal: PropTypes.string,
  soundcloud: PropTypes.string,
  audiomack: PropTypes.string,
  cta: PropTypes.string,
  date: PropTypes.date,
};
