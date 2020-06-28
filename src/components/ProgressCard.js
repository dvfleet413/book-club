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

    const getBookProgress = () => {
        
    }

    return (
        <div>
            you should be {Math.floor(getMonthPercentage() * 100)}% through the book
        </div>
    )
}

export default ProgressCard;