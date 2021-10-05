import React from 'react';
import './AboutUs.css';
import a from '../../images/banner.png';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {

    return (
        <div>
            <main style={{ backgroundColor: '#C0C0C0' }}>
                <div>
                    <img className='w-100' src={a} alt="About Banner" />
                </div>
                <Container fluid className='p-4'>
                    <Row className='p-2'>
                        {/* <Col>
                            <h1>We Try to build you perfect</h1>
                        </Col> */}
                        <Col>
                            <Row className='p-2'>
                                <Col className='pb-4 pe-3'>
                                    <h5>We have highly trained and experienced Mentors where they served their worked area long time</h5>
                                </Col>
                                <Col>
                                    <h5>We provide video content with live class and also we have extra support team.</h5>
                                </Col>
                            </Row>

                            <Row className='p-2'>
                                <Col>
                                    <h5>Provide qulityful lesson and clear understanding with visual method</h5>
                                </Col>
                                <Col>
                                    <h5>Effective for to solve real life problem and to build your bright career</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
};

export default AboutUs;