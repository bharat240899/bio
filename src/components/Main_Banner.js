import React from 'react';

const MainBanner = ({ title, description, classNames }) => {
  const { heading1, descriptive_text } = classNames; // Destructure class names from props

  return (
    <div className="common mainbanner  default_spacing" role="banner" aria-labelledby="main-heading">
      <h1 id="main-heading" className={`mainbanner_title ${heading1}`}>{title}</h1> {/* Use template literals to interpolate class names */}
      <p className={`mainbanner_description ${descriptive_text}`}>{description}</p> {/* Use template literals to interpolate class names */}
    </div>
  );
};

export default MainBanner;
