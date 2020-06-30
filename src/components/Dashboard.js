import React from 'react';
import { useAuth } from '../hooks/useAuth';
import CurrentBook from '../containers/CurrentBook';

const Dashboard = (props) => {
    const [user, setUser] = useAuth()

    return(
        <div>
            <div className="welcome">
                <h1>Hello, {user && user.username}!</h1>
                <h3>Checkout this month's book:</h3>
            </div>
            
            <CurrentBook user={user} />
        </div>
    )
}

export default Dashboard;