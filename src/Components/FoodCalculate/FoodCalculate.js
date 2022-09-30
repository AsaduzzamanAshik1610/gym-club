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
            <h2>Add A break</h2>
            <div className='btn-break'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
                </div>
                <h2>Exercise Details</h2>
                <div className='exercise'>
                  <h3>Exercise time</h3>
                </div>
                <div className='break'>
                    <h2>Break time</h2>
                </div>
                <button className='btn-activity'>Activity completed</button>
        </div>

    );
};

export default FoodCalculate;