import React from 'react';

export default function ImpactCard(props) {
  const symbol = props.symbol;
  const color = props.color;

  return (
    <div className="py-1 flex items-center space-x-2 rounded-lg text-base text-[#00740C]">
      <div
        className={`justify-center items-center w-8 h-8 align-middle text-center not-prose rounded-md
        ${color ? color : 'bg-[#EEF6F0]'}`}
      >
        <p className="text-center items-center h-full w-full flex justify-center text-[#00740C] text-xl">
          {symbol ? `${symbol}` : '↗'}
        </p>
      </div>
      <p className="font-medium whitespace-nowrap">{props.copy}</p>
    </div>
  );
}
