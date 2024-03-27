// MainBanner.js
import React from 'react';
import TypeWrite from '../features/TypeWrite'; // Import TypeWrite component

const MainBanner = ({ title, description, classNames, typewriter }) => {
  const { heading1, descriptive_text } = classNames; // Destructure class names from props

  return (
    <div className="common mainbanner  default_spacing" role="banner" aria-labelledby="main-heading">
      <h1 id="main-heading" className={`mainbanner_title ${heading1}`}>{title}</h1>
      {typewriter ? (
        <p className={`mainbanner_description ${descriptive_text}`}>
          <TypeWrite text={description} speed={30} />
        </p>
      ) : (
        <p className={`mainbanner_description ${descriptive_text}`}>{description}</p>
      )}
    </div>
  );
};

export default MainBanner;
