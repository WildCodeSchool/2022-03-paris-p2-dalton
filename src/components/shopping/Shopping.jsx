import React from 'react';
import { useState, useEffect } from 'react';
import './Shopping.css';

const Shopping = ({ shopping }) => {
    const [count, setCount] = useState('');
    const [price, setPrice] = useState(0);
    
    useEffect(() => {
        const myPrice = () => {
            let randomPrice = Math.floor(Math.random() * (20 - 10) + 10);
            return setPrice(randomPrice)
        };
        myPrice()
    }, [])
    

  return (
    <div className='main-container-cards'>
    <ul className='whs-cards'>
        <li>
            <img className='whs-cards-images' src={shopping.image} alt={shopping.name} />
            <div>
                <span>{shopping.name}</span>
            </div>
            <div>
                <span>Price: {price}</span>
            </div>
            <div>
            <button className='btn-add' type='button' onClick={() => setCount((count) => parseInt(count + 1))}>Add to bag {count}
            </button>
            <button className='btn-reset' type='button' onClick={() => setCount('')}>reset</button>
            </div>
        </li>
    </ul>
    </div>
  )
}

export default Shopping