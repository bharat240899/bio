import React, { useState, useEffect } from 'react';
//Integration pending
const TypeWrite = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);
  
    // Throw an error after the interval has been set up
    setTimeout(() => {
      throw new Error('An error occurred in the useEffect hook');
    }, 10000); // Adjust the timeout as needed
  
    return () => clearInterval(intervalId);
  }, [text, speed]);
  
  return <p>{displayText}</p>;
};

export default TypeWrite;
