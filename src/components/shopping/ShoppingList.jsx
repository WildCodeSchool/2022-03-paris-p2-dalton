import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Shopping from './Shopping';

const ShoppingList = () => {
    const [shoppings, setShoppings] = useState([]);

    const url = "https://lit-badlands-40023.herokuapp.com/heros"

    useEffect(() => {
        axios
        .get(url)
        .then((res) => res.data)
        .then((data) => setShoppings(data))
    }, [])

  return (
    <div>
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