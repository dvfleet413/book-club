import React from 'react';

const ProgressCard = (props) => {
    const getMonthPercentage = () => {
        const today = new Date()
        const month = today.getMonth()
        const date = today.getDate()
        let percentage
        if (month === 2){
            percentage = date / 28
        } else if (month % 2 === 0){
            percentage = date / 30
        } else { 
            percentage = date / 31
        }
        return percentage;
    }

    return (
        <div>
            <div className="chapter-bar">
                <div className="chapter" style={{width: `${Math.floor(parseInt(getMonthPercentage() * 100, 10))}%`}}></div>
            </div>
            <p>In order to finish by the end of the month, you should be finished with chapter <strong>{Math.floor(props.book.chapters * getMonthPercentage())}</strong> out of {props.book.chapters}</p>
        </div>
    )
}

export default ProgressCard;