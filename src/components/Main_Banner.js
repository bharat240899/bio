import React from 'react';
import TypeWrite from '../features/TypeWrite'; // Import TypeWrite component
const MainBanner = ({ title, description, classNames, typewriter, image, button, textOverlay, primaryHeader ,srcUrl}) => {
  const { heading1, descriptive_text, btnClasses, textAlignment } = classNames; // Destructure class names from props

  // Determine if text overlay should be applied
  const overlayClasses = textOverlay ? 'text-overlay' : '';

  return (
    <div className={`common mainbanner default_spacing ${overlayClasses}`} role="banner" aria-labelledby="main-heading">
      {image && <img src={image} className="mainbanner_image img-fluid" alt='Main Banner' style={{ width: '100%' }} />} {/* Image tag */}
      <div className={`mainbanner_content ${textAlignment}`} > {/* Apply text-center class here */}
        {primaryHeader ? (
          <h1 id="main-heading" className={`mainbanner_title ${heading1}`}>
            {title}
          </h1>)
          : (
            <h3 id="promo-heading" className={`promobanner_title ${heading1}`}>
              {title}
            </h3>
          )
        }

        {typewriter ? (
          <p className={`mainbanner_description ${descriptive_text}`}>
            <TypeWrite text={description} speed={30} />
          </p>
        ) : (
          <p className={`mainbanner_description ${descriptive_text}`}>{description}</p>
        )}
        {button && (
          <a className={`${btnClasses} fly-in`} href={srcUrl}>
            {button}
          </a>
        )}
      </div>
    </div>
  );
};

export default MainBanner;
