import React from 'react';
import { useState, useEffect } from 'react';
import dustbin from './dustbin.png';
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
    <div className='whs-list-cards'>
    <div className='whs-main-container-cards'>
    <ul className='whs-cards'>
        <li>
            <img className='whs-cards-images' src={shopping.image} alt={shopping.name} />
            <div className='whs-cards-names'>
                <span>{shopping.name}</span>
            </div>
            <div>
            </div>
        </li>
    </ul>
    </div>
    <div className='whs-cards-prices'>
            <span>Price: {price}</span>
    </div>
    <div className='btn-card' >
    <button className='btn-add' type='button' onClick={() => setCount((count) => parseInt(count + 1))}>ADD TO BAG {count}
            </button>
            <button className='btn-reset' type='button' onClick={() => setCount('')}><img src={dustbin} alt='dustbin' height='22' width='22' /></button>
    </div>
    </div>
  )
}

export default Shopping