import React from 'react';
import './Header.css';
import a from '../../images/banner.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='header' variant="dark">
            <Container>
                <Navbar.Brand href="/home"><img src={a} alt="" width="200" height="80" className="d-inline-block align-top" /></Navbar.Brand>
                <Nav className="mx-end">
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="/courses">Courses</Link>
                    <Link className="link" to="/feedback">Feedback</Link>
                    <Link className="link" to="/about">About Us</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
