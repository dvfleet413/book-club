import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

const Books = (props) => {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        fetch("https://localhost:5001/api/books")
            .then(r => r.json())
            .then(d => setBooks(d))
    })

    const bookCards = books.map(book => <BookCard key={book.bookId} book={book} />)

    return (
        <div>
            {bookCards}
        </div>
    )
}

export default Books;