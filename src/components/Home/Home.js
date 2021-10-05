import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import a from '../../images/banner.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
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
                <h1>Courses We Provide</h1>
                <div className="p-4">
                    <Row xs={1} md={4} className="g-4">
                        {course.slice(0, 4).map(course => (
                            <Col>
                                <Card style={{ backgroundColor: 'black', border: '5px solid black' }}>
                                    <Card.Img style={{ height: '300px' }} variant="top" src={course.img} />
                                    <Card.Body>
                                        <Card.Title style={{ color: 'white', fontWeight: "bold" }}>{course.name}</Card.Title>
                                        <Card.Text>
                                            <Link className="link" to="/services"><small>View More</small></Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </main>
    );
};

export default Home;