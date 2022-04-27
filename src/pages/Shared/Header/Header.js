import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../../components/CustomLink/CustomLink';
import logo from '../../../images/goodwish-logo-light.png'
import './Header.css'

const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  fixed='top' className='header-container'  variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height="30" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className='nav-style my-1'>
                            <Nav.Link as={CustomLink} to='/donate' className='mt-2 fw-bold'>Donation</Nav.Link>
                            <Nav.Link as={CustomLink} to='/addcauses' className='mt-2 fw-bold'>Add Causes</Nav.Link>
                            <Nav.Link as={CustomLink} to='/events' className='mt-2 fw-bold'>Events</Nav.Link>
                            <Nav.Link as={CustomLink} to='/blog' className='mt-2 fw-bold'>Blog</Nav.Link>
                            <Nav.Link as={CustomLink} to='/login' className='mt-2 fw-bold'>Login</Nav.Link>
                            <Nav.Link as={CustomLink} to='/signup' className='mt-2 fw-bold'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;