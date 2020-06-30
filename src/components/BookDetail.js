import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { config } from '../constants'
import BookCard from './BookCard';

const BookDetail = (props) => {
    const [book, setBook] = useState({})
    const {id} = useParams();

    useEffect(() => {
        fetch(`${config.url.API_URL}/api/books/${id}`)
            .then(r => r.json())
            .then(d => setBook(d))
    }, [id])

    return(
        <div>
            <BookCard book={book} />
        </div>
    )
}

export default BookDetail;