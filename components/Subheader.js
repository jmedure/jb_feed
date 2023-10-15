import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../styles/Subheader.module.css';

function Subheader() {
  return (
    <div className="-m-1 font-jbd text-xl text-neutral-600 w-[400px] tracking-tight text-left">
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
