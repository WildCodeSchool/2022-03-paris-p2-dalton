import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Shopping from './Shopping';
import './ShoppingList.css';

const ShoppingList = () => {
    const [shoppings, setShoppings] = useState([]);

    const url = "https://lit-badlands-40023.herokuapp.com/heros"

    useEffect(() => {
        axios
        .get(url)
        .then((res) => res.data)
        .then((data) => setShoppings(data))
    }, []);

    const categories = shoppings.reduce(
        (acc, shopping) => 
        acc.includes(shopping.race) ? acc : acc.concat(shopping.race),
        []
    )

  return (
    <div>
        <div className='whs-categories'>
            {categories.map((cat) => (
                <div key={cat}>{cat}</div>
            ))}
        </div>
        {shoppings && 
        shoppings.map((shopping) => (
            <div key={shopping.id}>
                <Shopping shopping={shopping} />
            </div>
        ))}
    </div>
  )
}

export default ShoppingList