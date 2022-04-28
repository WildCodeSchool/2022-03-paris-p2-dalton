import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Shopping from './Shopping';
import Categories from './Categories';
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

    const [activeCategory, setActiveCategory] = useState('')
    const categories = shoppings.reduce(
        (acc, shopping) => 
        acc.includes(shopping.race) ? acc : acc.concat(shopping.race),
        []
    )


  return (
    <div className='whs-shopping-list'>
        <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
         />                   
        <ul className='whs-shopping-list'>
        {shoppings && 
        shoppings.filter((shopping) => {
            return ((shopping.id !== '8') && (shopping.id !== '10') && (shopping.id !== '19'));
        })
        .map((shopping) => 
        !activeCategory || activeCategory === shopping.race ? (
            <div key={shopping.id}>
                <Shopping shopping={shopping} />
            </div>
        ) : null
        )}
        </ul>
    </div>
  )
}

export default ShoppingList