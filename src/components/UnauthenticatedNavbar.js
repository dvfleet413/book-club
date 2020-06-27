import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const UnauthenticatedNavbar = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Second Chance Book Club</Navbar.Brand>
        </Navbar>
    )
}

export default UnauthenticatedNavbar;