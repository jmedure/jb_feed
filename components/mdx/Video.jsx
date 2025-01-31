import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Image from 'next/image';
// import VideoPlayerControls from '../VideoPlayerControls';

export default function Video(props) {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState();
  const [videoProgress, setVideoProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const blurDataURL =
    'data:image/jpeg;base64,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';

  const replaceImage = async () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != undefined && currentTime != undefined) {
      let loadingTimeout = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.0000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [videoProgress, videoDuration, isPaused]);

  // const togglePlayPause = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     setIsPaused(!video.paused);
  //     video.paused ? video.play() : video.pause();
  //   }
  // };

  return (
    <div className="pt-6 pb-2">
      <div className="relative group mx-auto w-full h-full border dark:border-white/10 rounded-lg bg-neutral-50 dark:bg-neutral-900 border-black/10 overflow-hidden">
        {/* <div className="absolute top-4 right-4 z-10">
          <VideoPlayerControls
            progress={videoProgress}
            isPaused={isPaused}
            onPlayPause={togglePlayPause}
          />
        </div> */}
        {isLoaded ? (
          <video
            ref={videoRef}
            className="m-0 p-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            loading="lazy"
          >
            <source
              src={`https://dguat50fsbc3q.cloudfront.net/${props.src}`}
              type="video/mp4"
            />
          </video>
        ) : (
          <Image
            src={props.image}
            fill
            sizes="50vw,100vw"
            alt="placeholder"
            placeholder="blur"
            blurDataURL={blurDataURL}
            onLoadingComplete={replaceImage()}
          />
        )}
      </div>
      {props.caption ? (
        <figcaption className="w-full align-middle text-center">
          {props.caption}
        </figcaption>
      ) : null}
    </div>
  );
}
