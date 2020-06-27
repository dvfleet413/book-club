import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

const UnauthenticatedNavbar = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Second Chance Book Club</Navbar.Brand>
            </LinkContainer>
            <Nav className="mr-auto">
                <LinkContainer to="/books">
                    <Nav.Link>All Books</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    )
}

export default UnauthenticatedNavbar;