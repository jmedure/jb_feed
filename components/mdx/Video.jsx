import { useEffect, useRef, useState } from 'react';
import VideoPlayerControls from '../VideoPlayerControls';

export default function Video(props) {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState();
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
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

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };

  return (
    <div className="pt-6 pb-2">
      <div className="relative group  mx-auto w-full h-full border aspect-video rounded-lg bg-neutral-50 border-black/10 overflow-hidden">
        <div className="absolute top-4 right-4 z-10">
          <VideoPlayerControls
            progress={videoProgress}
            isPaused={isPaused}
            onPlayPause={togglePlayPause}
          />
        </div>
        <video
          ref={videoRef}
          className="m-0 p-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={`https://dguat50fsbc3q.cloudfront.net/${props.src}`}
            type="video/mp4"
          />
        </video>
      </div>
      <figcaption className="w-full align-middle text-center">
        {props.caption}
      </figcaption>
    </div>
  );
}
