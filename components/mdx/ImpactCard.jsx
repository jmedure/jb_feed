import React from 'react';

export default function ImpactCard(props) {
  const symbol = props.symbol;
  const color = props.color;

  return (
    <div className="p-3 border flex items-center space-x-3 rounded-md bg-white text-base">
      <div
        className={` text-green-700 justify-center items-center w-8 h-8 align-middle text-center text-xl  not-prose rounded-md
        ${color ? color : 'bg-green-50'}`}
      >
        {symbol ? (
          <p className="text-center items-center h-full w-full flex justify-center">
            {symbol}
          </p>
        ) : (
          <p className="text-center items-center h-full w-full flex justify-center">
            ↗
          </p>
        )}
      </div>
      <p className="font-medium">{props.copy}</p>
    </div>
  );
}
