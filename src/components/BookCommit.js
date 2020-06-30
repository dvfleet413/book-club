import React from 'react';

const BookCommit = (props) => {

    const handleClick = (e) => {
        e.preventDefault()
    }

    if (!props.user || props.user.isActive){
        return null
    } else {
        return (
            <button className="btn btn-primary" onClick={handleClick}>I'm in!</button>
            )
    } 
}

export default BookCommit;