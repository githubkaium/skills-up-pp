import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import a from '../../images/banner.png';
import './Feedback.css';

const Feedback = () => {
    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        fetch('./feedbackDb.json')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, []);

    return (
        <main style={{ backgroundColor: '#C0C0C0' }}>
            <div className="p-2">
                <img className='w-100' src={a} alt="" />
                <h1>Student Feedback</h1>
            </div>
            <div className="p-2">
                <Row xs={1} md={3} className="g-5">
                    {feedback.map(feedback => (
                        <Col>
                            <Card>
                                <Card.Img style={{ height: '280px' }} variant="top" src={feedback.img} />
                                <Card.Body>
                                    <Card.Title>{feedback.name}</Card.Title>
                                    <Card.Text className="text">
                                        <span>Profession:</span> {feedback.profession} <br />
                                        <span>Age:</span> {feedback.age} <br /> <br />
                                        <p><blockquote><q>{feedback.feedback}</q></blockquote> </p><br />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </main>
    );
};

export default Feedback;