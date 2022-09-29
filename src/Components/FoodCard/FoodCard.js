import React from 'react';
import './FoodCard.css'
const FoodCard = (props) => {
    const {name,strMealThumb,time,age}=props.food;
    return (
        <div className='card'>
           <div className='image'>
             <img src={strMealThumb} alt="" />
            </div>
            <div className="food-info">
                <h3>{name}</h3>
                <p>{time}</p>
                <p>{age}</p>
            </div>
            <div className="btn-wrapper">
                <button>Add to list</button>
            </div>

        </div>
    );
};

export default FoodCard;