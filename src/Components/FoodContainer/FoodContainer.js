import React, { useEffect, useState } from 'react';
import logo from '../../hamburger.png'
import FoodCard from '../FoodCard/FoodCard';
import './FoodContainer.css'
const FoodContainer = () => {
    const [foods, setFoods] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setFoods(data))
    },[])
    return (
        <div className='food-outer'>
           <div className='food-info-wraper'>
            <div className='logo-wraper'>
              <img src={logo} alt="" />
              <h2>Food Club</h2>
            </div>
            <div className='food-carts'>
              <div className='food-grid'>
               {
                foods.map(food=> <FoodCard food={food} key={food.id}></FoodCard>)
               }
              </div>
            </div>
           </div>
           <div className='food-states'>

           </div>

        </div>
    );
};

export default FoodContainer;