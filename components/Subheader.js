import React from 'react';
import Typewriter from 'typewriter-effect';

function Subheader(props) {
  if (props.type === 'center') {
    return (
      <div className="hidden sm:flex -m-1 font-jbd text-xl font-normal justify-center text-neutral-600 w-[200px] sm:w-[400px] whitespace-nowrap tracking-tight text-center">
        <Typewriter
          options={{
            strings: [
              'pursuing mastery',
              'making some tunes',
              'probably cooking something',
              'loving on my little family',
              'reading a book',
              'sharing my work',
              'rewriting for clarity',
              'going outside',
              'training for my first marathon',
              'drinking some cold, cold, cold brew',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    );
  } else
    return (
      <div className="hidden sm:flex -m-1 font-jbd text-xl font-normal text-neutral-600 w-[200px] sm:w-[400px] whitespace-nowrap tracking-tight text-left">
        <Typewriter
          options={{
            strings: [
              'pursuing mastery',
              'making some tunes',
              'probably cooking something',
              'loving on my little family',
              'reading a book',
              'sharing my work',
              'rewriting for clarity',
              'going outside',
              'training for my first marathon',
              'drinking some cold, cold, cold brew',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    );
}

export default Subheader;
