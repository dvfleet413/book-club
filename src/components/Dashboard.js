import React from 'react';
import { useAuth } from '../hooks/useAuth';
import CurrentBook from '../containers/CurrentBook';
import ProgressCard from './ProgressCard';

const Dashboard = (props) => {
    const [user, setUser] = useAuth()

    return(
        <div>
            <h1>Hello, {user}!</h1>
            <h3>Checkout this month's book:</h3>
            <CurrentBook />
            <ProgressCard />
        </div>
    )
}

export default Dashboard;