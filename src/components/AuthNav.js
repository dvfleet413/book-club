import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';
import logout from '../actions/logout';

const AuthNav = (props) => {
    const { history } = props

    const handleLogout = (e) => {
        e.preventDefault()
        logout()
        props.setUser(null)
        history.push('/')
    }

    if(props.user){
        return(
            <Nav className="ml-auto">
                <Nav.Link onClick={(e) => handleLogout(e)}>Logout</Nav.Link>
            </Nav>
        )
    } else {
        return(
            <Nav className="ml-auto">
                <LinkContainer to="/Register">
                    <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
            </Nav>
        )
    }
}

export default withRouter(AuthNav);