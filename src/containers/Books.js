import React, { useState, useEffect } from 'react';

const Books = (props) => {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        fetch("https://localhost:5001/api/books")
            .then(r => r.json())
            .then(d => setBooks(d))
    })

    return (
        <div>

        </div>
    )
}

export default Books;