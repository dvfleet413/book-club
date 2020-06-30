import React from 'react';
import { config } from '../constants';
import { Link } from 'react-router-dom';

const BookCommit = (props) => {

    const handleClick = (e) => {
        e.preventDefault()
        const configObj = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                userId: props.user.userId,
                email: props.user.email,
                isActive: true
            })
        }
        fetch(`${config.url.API_URL}/api/users/${props.user.userId}`, configObj)
            .then(r => r.json())
            .then(d => props.setUser(d))
            .catch(e => console.log(e))
    }

    if (!props.user){
        return (
            <div>
                <Link to='/login'>Login</Link> or <Link to='/register'>Create an Account</Link>
            </div>
        )
    } else if (props.user.isActive){
        return null
    }
    else {
        return (
            <button className="btn btn-primary" onClick={handleClick}>I'm in!</button>
        )
    } 
}

export default BookCommit;