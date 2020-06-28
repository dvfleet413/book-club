import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AuthNav from './AuthNav';
import { LinkContainer } from 'react-router-bootstrap';

const UnauthenticatedNavbar = (props) => {
    return (
        <Navbar bg="light" expand="md">
            <LinkContainer to="/">
                <Navbar.Brand>Second Chance Book Club</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/books">
                        <Nav.Link>All Books</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/books/current">
                        <Nav.Link>Current Book</Nav.Link>
                    </LinkContainer>
                </Nav>
                <AuthNav />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default UnauthenticatedNavbar;