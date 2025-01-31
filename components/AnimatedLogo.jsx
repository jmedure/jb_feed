import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  const uniqueId = React.useId();
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Animated logo"
    >
      <defs>
        <mask id={`circleMask-${uniqueId}`}>
          <circle cx="18" cy="18" r="18" fill="white" />
        </mask>

        <filter id={`grain-${uniqueId}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="10"
            numOctaves="10"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.5
                    0 0 0 0 0.5
                    0 0 0 0 0.5
                    0 0 0 1 0"
          />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>

        {/* Shadow gradient */}
        <linearGradient
          id={`shadowGradient-${uniqueId}`}
          x1="0"
          y1="1"
          x2="1"
          y2="0"
        >
          <stop offset="0%" stopColor="rgba(0,0,0,1)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>

        {/* Highlight gradient */}
        <linearGradient
          id={`highlightGradient-${uniqueId}`}
          x1="36"
          y1="0"
          x2="0"
          y2="10"
        >
          <stop offset="0%" stopColor="rgba(255, 255, 255,1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      <g mask={`url(#circleMask-${uniqueId})`}>
        {[
          {
            fill: '#ffffff  ',
            animate: { cx: [18], cy: [18] },
            radius: 18,
            blur: 0,
            opacity: 1,
          },
          {
            fill: '#2b93d0',
            animate: { cx: [28, 0, 4, 28], cy: [28, 18, 28, 28] },
            radius: 18,
            blur: 5,
            opacity: 0.8,
          },
          {
            fill: '#0b3d4e',
            animate: { cx: [46, 18, -20], cy: [26, 36, 20] },
            radius: 10,
            blur: 8,
            opacity: 0.7,
          },
          {
            fill: '#4ccae0',
            animate: { cx: [60, 18, -40], cy: [5, 24, 16] },
            radius: 16,
            blur: 4,
            opacity: 0.5,
          },
          {
            fill: '#1AAFF1',
            animate: { cx: [16, 36, 20, 16], cy: [16, 36, 36, 16] },
            radius: 15,
            blur: 5,
            opacity: 0.5,
          },

          {
            fill: '#cbf9ff',
            animate: { cx: [30, 18, 0, 30], cy: [0, 12, -15, 0] },
            radius: 10,
            blur: 10,
            opacity: 1,
          },
          //   {
          //     fill: '#bff0ff',
          //     animate: { cx: [-8, 12, -8], cy: [-8, 20, -8] },
          //     radius: 10,
          //     blur: 10,
          //     opacity: 1,
          //   },
        ].map((circle, index) => (
          <motion.circle
            key={index}
            r={circle.radius}
            fill={circle.fill}
            animate={circle.animate}
            transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
            }}
            style={{
              filter: `blur(${circle.blur}px)`,
              opacity: circle.opacity,
              //   mixBlendMode: 'screen',
            }}
          />
        ))}
      </g>

      {/* Shadow overlay */}
      <circle
        cx="18"
        cy="18"
        r="18"
        fill={`url(#shadowGradient-${uniqueId})`}
        style={{ mixBlendMode: 'overlay', opacity: 0.6 }}
      />

      {/* Highlight overlay */}
      <circle
        cx="18"
        cy="18"
        r="18"
        fill={`url(#highlightGradient-${uniqueId})`}
        style={{ mixBlendMode: 'overlay', opacity: 1 }}
      />

      {/* Grain effect clipped to circle */}
      <circle
        cx="18"
        cy="18"
        r="18"
        fill="white"
        filter={`url(#grain-${uniqueId})`}
        style={{
          mixBlendMode: 'overlay',
          opacity: 1,
        }}
      />
    </svg>
  );
};

export default AnimatedLogo;
