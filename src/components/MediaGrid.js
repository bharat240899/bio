import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MediaGrid = ({ 
    mediaOnRight = false, 
    button = false, 
    mediaType = 'video', 
    srcUrl, 
    btnText,
    mediaSource, 
    mediaTitle, 
    mediaDescription, 
    headingClasses, 
    btnClasses 
}) => {
    const textColProps = { xs: 12, md: 7, className: mediaOnRight ? 'order-md-2' : '' };
    const mediaColProps = { xs: 12, md: 5, className: mediaOnRight ? 'order-md-1' : '' };

    return (
        <Row className="common default_spacing align-items-center">
            <Col {...textColProps}>
                <div className="p-3 text-white">
                    <h3 className={headingClasses} aria-label={mediaTitle}>
                        {mediaTitle}
                    </h3>
                    <p aria-label={`${mediaTitle} Description`}>{mediaDescription}</p>
                    {/* Render button only if the button prop is true */}
                    {button && <a className={btnClasses} href={srcUrl} target='_blank' rel='noreferrer'>{btnText}</a>}
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
