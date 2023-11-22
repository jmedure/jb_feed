import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Image from 'next/image';
// import VideoPlayerControls from '../VideoPlayerControls';

export default function VideoBasic(props) {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState();
  const [videoProgress, setVideoProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const blurDataURL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

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

  return (
    <div className="object-cover bg-black h-full overflow-hidden">
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
  );
}
