import React from 'react';
import Typewriter from 'typewriter-effect';

function SubheaderLinks() {
  return (
    <div className="text-lg sm:text-xl font-mont uppercase align-middle z-20 text-center justify-center tracking-tight w-full basis-1/2 flex flex-wrap">
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

export default SubheaderLinks;
