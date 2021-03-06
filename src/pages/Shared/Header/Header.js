import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../../components/CustomLink/CustomLink';
import auth from '../../../Firebase/firebase.init';
import logo from '../../../images/goodwish-logo-light.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    // console.log(user); 
    const admin = {
        adminEmail:process.env.REACT_APP_admin_email,
        password:process.env.REACT_APP_admin_pass
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed='top' className='header-container' variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height="30" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className='nav-style my-1'>
                            <Nav.Link as={CustomLink} to='/donate' className='mt-2 fw-bold'>Donation</Nav.Link>
                            {user?.email === admin.adminEmail
                                &&
                                <>
                                    <Nav.Link as={CustomLink} to='/manage-cause' className='mt-2 fw-bold'>Manage Causes</Nav.Link>
                                </>
                            }
                            {user?.email
                                &&
                                <>
                                    <Nav.Link as={CustomLink} to='/add-causes' className='mt-2 fw-bold'>Add Causes</Nav.Link>

                                </>
                            }
                            {/* {user?.uid
                                ?
                                ""
                                :
                                <Nav.Link as={CustomLink} to='/about'>About</Nav.Link>
                            } */}

                            <Nav.Link as={CustomLink} to='/events' className='mt-2 fw-bold'>Events</Nav.Link>
                            <Nav.Link as={CustomLink} to='/blog' className='mt-2 fw-bold'>Blog</Nav.Link>

                            {user?.uid
                                ?
                                <NavDropdown className='pt-2 fs-bold  ' title="Profile" id="collasible-nav-dropdown">
                                    <Nav.Link as={CustomLink} to='/profile' className='fw-bold mt-2 text-light'>Dashboard</Nav.Link>
                                    <Nav.Link as={CustomLink} to='/login' className='mt-2 fw-bold  text-light' onClick={() => signOut(auth)}>Log Out</Nav.Link>
                                </NavDropdown>
                                :
                                <>
                                    <Nav.Link as={CustomLink} to='/login' className='mt-2 fw-bold'>Login</Nav.Link>
                                    <Nav.Link as={CustomLink} to='/signup' className='mt-2 fw-bold'>Register</Nav.Link>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;