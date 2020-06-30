import React, { useState, useEffect } from 'react';
import { config } from '../constants';
import { withRouter } from 'react-router-dom';

const RegisterForm = (props) => {
    const { history } = props

    const [username, setUsername] = useState()
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const [email, setEmail] = useState()
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState()
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const [passwordConfirm, setPasswordConfirm] = useState()
    const handlePasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm
            })
        }
        fetch(`${config.url.API_URL}/api/auth/register`, configObj)
            .then(r => r.json())
            .then(d => {
                props.setUser(d)
                history.push('/')
            })
            .catch(e => console.log(e))
    }

    return(
        <div className="login-form">
            <form onSubmit={e => handleSubmit(e)}>
                <div className="input">
                    <label htmlFor="username">Username: </label>
                    <input type="text" 
                        name="username" 
                        value={username}
                        onChange={e => handleUsernameChange(e)} /><br />
                </div>
                <div className="input">
                    <label htmlFor="email">Email: </label>
                    <input type="text" 
                        name="email" 
                        value={email}
                        onChange={e => handleEmailChange(e)} /><br />
                </div>
                <div className="input">
                    <label htmlFor="password">Password: </label>
                    <input type="password" 
                        name="password" 
                        value={password}
                        onChange={e => handlePasswordChange(e)} /><br />
                </div>
                <div className="input">
                    <label htmlFor="password">Confirm Password: </label>
                    <input type="password" 
                        name="password-confirm" 
                        value={passwordConfirm}
                        onChange={e => handlePasswordConfirmChange(e)} /><br />
                </div>
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default withRouter(RegisterForm);