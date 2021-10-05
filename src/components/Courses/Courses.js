import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import a from '../../images/banner.png';

const Courses = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./courseDb.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);

    return (
        <main style={{ backgroundColor: '#C0C0C0' }}>
            <div className="p-2">
                <img className='w-100' src={a} alt="" />
                <h1>All Courses</h1>
            </div>
            <div className="p-4">
                <Row xs={1} md={3} className="g-5">
                    {course.map(course => (
                        <Col>
                            <Card style={{ backgroundColor: 'gray', border: '1px solid white' }}>
                                <Card.Img style={{ height: '300px' }} variant="top" src={course.img} />
                                <Card.Body>
                                    <Card.Title style={{ color: 'black', fontWeight: "bold" }}>{course.name}</Card.Title>
                                    <Card.Text style={{ color: 'white', fontWeight: "bold" }}>
                                        Fee: {course.fee}
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

export default Courses;