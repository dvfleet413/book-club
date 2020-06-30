import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { config } from '../constants'

const CurrentBook = (props) => {
    const [book, setBook] = useState();
    useEffect(() => {
        fetch(`${config.url.API_URL}/api/books/current`)
            .then(r => r.json())
            .then(d => setBook(d))
    }, [])

    return(
        <div>
            <h1>This Month's Book Is...</h1>
            {book ? <BookCard book={book} /> : null}
        </div>
    )
}

export default CurrentBook