import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { config } from '../constants'

const LoginForm = (props) => {
    const { history } = props

    const [username, setUsername] = useState('')
    const handleUsernameChange = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }

    const [password, setPassword] = useState('')
    const handlePasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
            credentials: "include"
        }

        fetch(`${config.url.API_URL}/api/auth/login`, configObj)
            .then(r => {
                if(!r.ok){throw r}
                return r.json()
            })
            .then(d => {
                props.setUser(d)
                history.push('/')
            })
            .catch(e => {
                debugger
                e.json().then(error => console.log(error))
            })
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
                    <label htmlFor="password">Password: </label>
                    <input type="password" 
                        name="password" 
                        value={password}
                        onChange={e => handlePasswordChange(e)} /><br />
                </div>
                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default withRouter(LoginForm);