import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import BookCommit from '../components/BookCommit';
import ProgressCard from '../components/ProgressCard';
import { config } from '../constants';

const CurrentBook = (props) => {
    const [book, setBook] = useState();
    useEffect(() => {
        fetch(`${config.url.API_URL}/api/books/current`)
            .then(r => r.json())
            .then(d => setBook(d))
    }, [])

    return(
        <div className="current-book">
            <h1>This Month's Book Is...</h1>
            {book ? <BookCard book={book} /> : null}
            <BookCommit user={props.user} setUser={props.setUser} />
            {book && <ProgressCard book={book} />}
        </div>
    )
}

export default CurrentBook