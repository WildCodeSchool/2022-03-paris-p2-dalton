import React from 'react';
import { useState, useEffect } from 'react';
import dustbin from '../../assets/images/dustbin.png';
import './styles/Shopping.css';

const Shopping = ({ shopping }) => {

  return (
    <div className='whs-list-cards'>
    <div className='whs-main-container-cards'>
    <ul className='whs-cards'>
        <li>
            <img className='whs-cards-images' src={shopping.picture} alt={shopping.name} />
            <div className='whs-cards-names'>
                <span>{shopping.name}</span>
            </div>
            <div>
            </div>
        </li>
    </ul>
    </div>
    <div className='whs-cards-prices'>
            <span>Price: {shopping.price} €</span>
    </div>
    </div>
  )
}

export default Shopping


// const [price, setPrice] = useState(0);
    
    // useEffect(() => {
    //     const myPrice = () => {
    //         let randomPrice = Math.floor(Math.random() * (20 - 10) + 10);
    //         return setPrice(randomPrice)
    //     };
    //     myPrice()
    // }, [])