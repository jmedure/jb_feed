import React, { createContext, useState, useContext, useEffect } from 'react';

const TypewriterContext = createContext();

const strings = [
  'making some tunes',
  'solving problems',
  'loving my little family',
  'reading a book',
  'going outside',
  'telling better stories',
  'moving my body',
  'trying my best',
];

export function TypewriterProvider({ children }) {
  const [typewriterState, setTypewriterState] = useState({
    currentIndex: 0,
    currentString: '',
    isDeleting: false,
    pause: false,
  });

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    const typewriter = () => {
      setTypewriterState((prevState) => {
        const { currentIndex, currentString, isDeleting, pause } = prevState;

        if (pause) {
          return { ...prevState, pause: false };
        }

        if (!isDeleting && currentString === strings[currentIndex]) {
          return { ...prevState, isDeleting: true, pause: true };
        }

        if (isDeleting && currentString === '') {
          const nextIndex = (currentIndex + 1) % strings.length;
          return { ...prevState, isDeleting: false, currentIndex: nextIndex };
        }

        const nextString = isDeleting
          ? currentString.slice(0, -1)
          : strings[currentIndex].slice(0, currentString.length + 1);

        return { ...prevState, currentString: nextString };
      });
    };

    const timer = setTimeout(
      typewriter,
      typewriterState.pause
        ? pauseDuration
        : typewriterState.isDeleting
        ? deletingSpeed
        : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [typewriterState]);

  return (
    <TypewriterContext.Provider value={{ typewriterState, setTypewriterState }}>
      {children}
    </TypewriterContext.Provider>
  );
}

export function useTypewriter() {
  return useContext(TypewriterContext);
}
