import React from 'react';
import PageTitle from '../components/Pagetitle';
import PageError from '../assets/PageError.png';
import { Container, Row, Col, Image } from 'react-bootstrap'; // Import Bootstrap components
import '../css/common_styles.css'; // Import your common styles

const PageNotFound = () => {
    return (
        <PageTitle>
            <Container className="common text-white d-flex align-items-center justify-content-center vh-100">
                <Row className="justify-content-center">
                    <Col xs={10} sm={10} md={8} lg={6}>
                        <div className="text-center">
                            <Image src={PageError} alt="Page Not Found" fluid className="mb-4 img-fluid" />
                            <h4>Sorry, Page Not Found</h4>
                            <p>The address you're looking for is invalid or does not exist. Please check your URL and try again.</p>
                            <a className="btn-gradient" href="/home">Return Home</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </PageTitle>
    );
};

export default PageNotFound;
