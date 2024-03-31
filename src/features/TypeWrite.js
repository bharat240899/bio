import  { useState, useEffect } from 'react';

const TypeWrite = ({ text , speed }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText(prevText => {
        // Append next character if currentIndex is within text length
        if (currentIndex < text.length) {
          return prevText + text[currentIndex];
        } else {
          clearInterval(interval); // Stop the interval if all characters are typed
          return prevText;
        }
      });
      currentIndex++;
    }, speed);

    return () => clearInterval(interval); // Cleanup the interval
  }, [text, speed]);

  return typedText; // Return the typedText JSX
};

export default TypeWrite;
