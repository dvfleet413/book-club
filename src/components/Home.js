import React from 'react';
import useAuth from '../hooks/useAuth';

const Home = (props) => {
    const user = useAuth()
    return (
        <div>
            {user ? `Hello, ${user}` : "Hello, stranger!"}
        </div>
    )
}

export default Home;