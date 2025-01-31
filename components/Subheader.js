import React from 'react';
import { useTypewriter } from '../contexts/TypewriterContext';

function Subheader(props) {
  const { typewriterState } = useTypewriter();

  const className =
    props.type === 'center'
      ? 'hidden sm:flex -m-1 font-jbd text-xl font-normal justify-center dark:text-neutral-400 text-neutral-600 w-[200px] sm:w-[400px] whitespace-nowrap tracking-tight text-center'
      : 'hidden sm:flex -m-1 font-jbd text-xl font-normal dark:text-neutral-400 text-neutral-600 w-[200px] sm:w-[400px] whitespace-nowrap tracking-tight text-left';

  return <div className={className}>{typewriterState.currentString}</div>;
}

export default Subheader;
