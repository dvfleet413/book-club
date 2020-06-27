import React from 'react';
import cookie from 'react-cookies';

const Home = (props) => {
    return (
        <div>
            {cookie.load("Token")}
        </div>
    )
}

export default Home;