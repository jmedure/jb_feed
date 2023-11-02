import React from 'react';



interface VideoPlayerControlsProps {
  progress: number;
  isPaused: boolean;
  onPlayPause: () => void;
  size?: number | undefined;
  width?: number | undefined;
};

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  progress,
  isPaused,
  onPlayPause,
  size = 36,
  width = 3,
}) => {
  const center =  size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
  <div className='group relative flex justify-center items-center sm:opacity-0 group-hover:opacity-100 transition-all duration-200'>
    <svg width={size} height={size} style={{transform: "rotate(-90deg)"}}>
      <circle cx={center} cy={center} r={radius} fill='transparent' stroke='#b0b0b0' strokeWidth={width} />
      <circle cx={center} cy={center} r={radius} fill='transparent' stroke='#3b3b3b' strokeWidth={width} strokeDasharray={dashArray} strokeDashoffset={dashOffset} />
    </svg>
    <div className='absolute'>
      <button onClick={onPlayPause} className='group cursor-pointer flex justify-center items-center'>
        <div className='transition-colors duration-200 sm:hover:fill-black fill-neutral-600 ease-in-out'>
          {isPaused ? <svg width="18" height="18" viewBox="0 0 18 18" fill="current" xmlns="http://www.w3.org/2000/svg">
                        <g mask="url(#mask0_2589_16567)">
                          <path d="M6.375 13.5719V4.42773L13.5576 8.99981L6.375 13.5719Z"/>
                        </g>
                      </svg>
                      : 
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="current" xmlns="http://www.w3.org/2000/svg">
                        <g mask="url(#mask0_2589_16579)">
                          <path d="M10.5 13.875V4.125H13.3125V13.875H10.5ZM4.6875 13.875V4.125H7.49998V13.875H4.6875Z"/>
                        </g>
                      </svg>
                      }
        </div>
      </button>
    </div>
  </div>);
};

export default VideoPlayerControls;