import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div className="home">
            <h3>Welcome to the Second Chance Book Club!</h3>
            <small>We tried this once before...</small>
            <p>Each month we select a new book to read. Check out the <Link to='/books/current'>Current Book</Link> to see what we're reading. If you'd like to join us, <Link to="/register">Create an Account</Link> and click the "I'm In!" button below the current book.</p>
            <p>Thanks for joining us!</p>
        </div>
    )
}

export default Home;