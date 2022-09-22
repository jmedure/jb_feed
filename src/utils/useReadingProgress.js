import { useEffect, useState } from 'react';

function useReadingProgress() {

  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    console.log(setCompletion)
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight >= 0) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
        window.removeEventListener('scroll', updateScrollCompletion);
    }

  }, []);
  
  return (completion);
}


export default useReadingProgress;
