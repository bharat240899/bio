import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TypeWrite from '../features/TypeWrite';

const MediaGrid = ({
    mediaOnRight = false,
    externalredirect,
    mediaType = 'video',
    srcUrl,
    btnText,
    mediaSource,
    mediaTitle,
    mediaDescription,
    headingClasses,
    btnClasses,
    typewriter,
    primaryHeader
}) => {
    const textColProps = { xs: 12, md: 7, className: mediaOnRight ? 'order-md-2' : '' };
    const mediaColProps = { xs: 12, md: 5, className: mediaOnRight ? 'order-md-1' : '' };

    return (
        <Row className="common default_spacing align-items-center">
            <Col {...textColProps}>
                <div className="p-3 text-white">
                    {primaryHeader ? (
                        <h1 className={headingClasses} aria-label={mediaTitle}>{mediaTitle}</h1>
                    ) : (
                        <h3 className={headingClasses} aria-label={mediaTitle}>
                            {mediaTitle}
                        </h3>
                    )
                    }

                    {typewriter ? (
                        <p aria-label={`${mediaTitle} Description`}>
                            <TypeWrite text={mediaDescription} speed={30} />
                        </p>
                    )
                    : (
                            <p aria-label={`${mediaTitle} Description`}>
                                {mediaDescription}
                            </p>

                    )}
                    {externalredirect ? (
                      <a className={btnClasses} href={srcUrl} target='_blank'  rel='noreferrer'>{btnText}</a>
                    ) :(
                     <a className={btnClasses} href={srcUrl}  rel='noreferrer'>{btnText}</a>
                    
                    )}
                    
                </div>
            </Col>
            <Col {...mediaColProps}>
                <div className="position-relative">
                    {mediaType === 'video' ? (
                        <video className="w-100 rounded shadow" autoPlay loop muted aria-label={mediaTitle}>
                            <source src={mediaSource} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img className="w-100 rounded shadow" src={mediaSource} alt={mediaTitle} />
                    )}
                </div>
            </Col>
        </Row>
    );
};

export default MediaGrid;
