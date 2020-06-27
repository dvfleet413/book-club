import React, { Component } from 'react';

export default class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange(e){
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                "username": e.target[0].value,
                "password": e.target[1].value
            }),
            credentials: "include"
        }

        fetch("https://localhost:5001/api/auth/login", configObj)
            .then(r => r.json())
            .then(d => {
                console.log(d)
            })
    }

    render(){
        return(
            <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="username">Username: </label>
                <input type="text" 
                       name="username" 
                       value={this.state.username}
                       onChange={e => this.handleChange(e)} />
                <label htmlFor="password">Password: </label>
                <input type="password" 
                       name="password" 
                       value={this.state.password}
                       onChange={e => this.handleChange(e)} />
                <input type="submit" value="Login" />
            </form>
        )
    }
}