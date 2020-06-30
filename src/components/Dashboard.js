import React from 'react';
import CurrentBook from '../containers/CurrentBook';
import { config } from '../constants';

const Dashboard = (props) => {

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
                isActive: false
            })
        }
        fetch(`${config.url.API_URL}/api/users/${props.user.userId}`, configObj)
            .then(r => r.json())
            .then(d => props.setUser(d))
            .catch(e => console.log(e))
    }

    if (props.user)
    {
        return(
            <div>
                <div className="welcome">
                    <h1>Hello, {props.user.username}!</h1>
                    {props.user.isActive ? <div><p>You are an active member of the Second Chance Book Club</p><button className="btn btn-primary" onClick={handleClick}>Take a break</button></div> : <p>Check out this month's book...</p>}
                </div>
                
                <CurrentBook user={props.user} setUser={props.setUser}  />
            </div>
        )
    } else {
        return(
            <div>
                <div className="welcome">
                    <h1>Hello!</h1>
                    <p>Check out this month's book...</p>
                </div>
                
                <CurrentBook user={props.user} setUser={props.setUser} />
            </div>
        )
    }
}

export default Dashboard;