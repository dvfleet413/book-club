import React, { useState, useEffect } from 'react';

export const LoginForm = (props) => {
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

        fetch("https://localhost:5001/api/auth/login", configObj)
            .then(r => {
                if(!r.ok){throw r}
                return r.json()
            })
            .then(d => props.setUser(d.user.userame))
            .catch(e => e.json().then(error => console.log(error)))
        setUsername('')
        setPassword('')
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="username">Username: </label>
            <input type="text" 
                   name="username" 
                   value={username}
                   onChange={e => handleUsernameChange(e)} />
            <label htmlFor="password">Password: </label>
            <input type="password" 
                   name="password" 
                   value={password}
                   onChange={e => handlePasswordChange(e)} />
            <input type="submit" value="Login" />
        </form>
    )
}

export default LoginForm;