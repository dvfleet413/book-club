import React from 'react';

const BookCard = (props) => {
    return(
        <div className="book-card">
            <h1>{props.book.title}</h1>
            <h2>By {props.book.author}</h2>
            <img src={props.book.imageUrl} />
        </div>
    )
}

export default BookCard;