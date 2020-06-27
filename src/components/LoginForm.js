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

    render(){
        return(
            <form>
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
            </form>
        )
    }
}