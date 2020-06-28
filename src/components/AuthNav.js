import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import logout from '../actions/logout';

const AuthNav = (props) => {
    const { history } = props
    const [user, setUser] = useAuth()

    const handleLogout = (e) => {
        e.preventDefault()
        logout()
        props.setUser(null)
        history.push('/')
    }

    if(user){
        return(
            <Nav className="ml-auto">
                <Nav.Link onClick={(e) => handleLogout(e)}>Logout</Nav.Link>
            </Nav>
        )
    } else {
        return(
            <Nav className="ml-auto">
                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
            </Nav>
        )
    }
}

export default withRouter(AuthNav);