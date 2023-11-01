import React from 'react';

export default function ComingSoon() {
  return (
    <div className="mt-24 -mb-32 -translate-y-52 z-20 py-8 ">
      <div className="relative h-52  bg-gradient-to-t blur-sm from-white to-white/0 z-10"></div>
      <div className="flex-row p-24 mx-auto shadow-lg border-black/10 rounded-xl max-w-[600px]  text-black not-prose space-y-6 text-lg font-jbd text-center">
        <div className="flex border justify-center items-center rounded-lg fill-black/80 border-black/10 bg-white w-12 h-12 p-3 mx-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 18 18"
            fill="current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g mask="url(#mask0_2589_16649)">
              <path d="M5.92787 15H12.0721V12.75C12.0721 11.8961 11.7735 11.1658 11.1764 10.5591C10.5793 9.95238 9.85383 9.64901 8.99998 9.64901C8.14613 9.64901 7.42065 9.95238 6.82354 10.5591C6.22643 11.1658 5.92787 11.8961 5.92787 12.75V15ZM3.375 16.125V15H4.80289V12.75C4.80289 11.9057 5.0339 11.1372 5.49592 10.4444C5.95795 9.75166 6.57022 9.27017 7.33273 8.99998C6.57022 8.72499 5.95795 8.24231 5.49592 7.55192C5.0339 6.86153 4.80289 6.09422 4.80289 5.24998V2.99998H3.375V1.875H14.625V2.99998H13.1971V5.24998C13.1971 6.09422 12.9661 6.86153 12.504 7.55192C12.042 8.24231 11.4297 8.72499 10.6672 8.99998C11.4297 9.27017 12.042 9.75166 12.504 10.4444C12.9661 11.1372 13.1971 11.9057 13.1971 12.75V15H14.625V16.125H3.375Z" />
            </g>
          </svg>
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-bold tracking-tight"> More coming soon</p>
          <p>
            I&#39;ll be finishing this soon. Feel free to shoot me message if
            you&#39;d like me to finish sooner.
          </p>
        </div>
      </div>
    </div>
  );
}
