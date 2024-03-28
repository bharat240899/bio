import React, { useState, useEffect } from 'react';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

const Animate = () => {
  const [quote, setQuote] = useState('');

  const updateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    // Initial quote display
    updateQuote();

    // Set interval to update quote every time interval ticks
    const intervalId = setInterval(() => {
      updateQuote();
    }, 5 * 60 * 1000); // 5 minutes interval

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='text-container text-white text-center'>
      <div className='floating-text'>
      <div className="d-flex justify-content-center align-items-center" >
      <div className="loader"></div>
    </div>
        {quote && <p className=''>{quote}</p>}
      </div>
    </div>
  );
};

export default Animate;
