import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = (props) => {
    const [book, setBook] = useState({})
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://localhost:5001/api/books/${id}`)
            .then(r => r.json())
            .then(d => setBook(d))
    }, [id])

    return(
        <div>
            <h1>{book.title}</h1>
        </div>
    )
}

export default BookDetail;