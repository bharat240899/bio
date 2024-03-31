import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MediaGrid from './MediaGrid';
const MultiGrid = ({
    redirectUrl1, 
    redirectUrl2,
    mediaType,
    mediaData1,
    mediaData2,
    title1,
    title2,
    description1,
    description2,
    btnText1,
    btnText2,
    btnClasses,
    compTitle,
    headingClasses
}) => {

    return (
        <Container className='common default_spacing multigrid'>
            <h3 className={headingClasses}>{compTitle}</h3>
            <Row className='mt-5'>
                {/* First Column */}
                <Col xs={12} className='mb-4'>
                    <MediaGrid
                        mediaType={mediaType}
                        mediaSource={mediaData1} // Pass the video source dynamically
                        mediaTitle={title1} // Pass the video title dynamically
                        mediaDescription={description1} // Pass the video description dynamically
                        button={true}
                        btnText={btnText1}
                        srcUrl={redirectUrl1}
                        mediaOnRight // Optionally render a button
                        btnClasses={btnClasses}
                    />
                </Col>
                {/* Second Column */}
                <Col xs={12} className='mb-4'>
                    <MediaGrid
                        mediaType={mediaType}
                        mediaSource={mediaData2} // Pass the video source dynamically
                        mediaTitle={title2} // Pass the video title dynamically
                        mediaDescription={description2} // Pass the video description dynamically
                        button={true}
                        srcUrl={redirectUrl2}
                        btnText={btnText2}
                        btnClasses={btnClasses}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default MultiGrid;
