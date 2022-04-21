import React from 'react';
import { Link } from 'react-router-dom';
import './Shopping.css';

const Shopping = ({ shopping}) => {
  return (
    <div className='whs-cards'>
        <div>
            {/* <Link to={{ pathname: `/shopping/${shopping.id}`}}>
                <img className='whs-cards-images' src={shopping.image} alt={shopping.name} />
            </Link> */}
            <img className='whs-cards-images' src={shopping.image} alt={shopping.name} />
            <div>
                <span>{shopping.name}</span>
            </div>
            <div>
                <span>{shopping.race}</span>
            </div>
            <div>
                <span>Price</span>
            </div>
        </div>
    </div>
  )
}

export default Shopping