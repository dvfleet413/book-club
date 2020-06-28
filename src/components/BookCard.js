import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    return(
        <div className="book-card">
            <h1><Link to={`/books/${props.book.bookId}`}>{props.book.title}</Link></h1>
            <h2>By {props.book.author}</h2>
            <img src={props.book.imageUrl} alt={`Cover of ${props.book.title}`} />
        </div>
    )
}

export default BookCard;