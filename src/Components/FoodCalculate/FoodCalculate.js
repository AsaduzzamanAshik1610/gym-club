import React from 'react';
import './FoodCalculate.css'
const FoodCalculate = () => {
    return (
        <div>
           <div className='user-container'>
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
            <p>Asaduzzaman Ashik</p>
            </div> 
            <div className='author-container'>
                <div>
                 <p>75kg</p>
                 <p>Weight</p>
                </div>
                <div>
                <p>6.5</p>
                 <p>Height</p>
                </div>
                <div>
                 <p>25 year</p>
                 <p>age</p>
                </div>
            </div>
        </div>

    );
};

export default FoodCalculate;