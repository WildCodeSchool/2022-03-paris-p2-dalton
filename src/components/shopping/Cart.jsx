import React from 'react';
import './styles/Cart.css';
import { useState } from 'react';
import basket from '../../assets/images/basket.png';

const Cart = ({cart, updateCart}) => {
  const [isOpen, setIsOpen] = useState(true)
  const total  = cart.reduce(
    (acc, shopping) => acc + shopping.amount * shopping.price, 0
  )

  return isOpen ? (
    <div className='whs-cart'>
      <button 
        className='whs-cart-toggle-button-close'
        onClick={() => setIsOpen(false)}
      >
      <span>Close the cart</span>
      </button>
      {cart.length > 0 ? (
        <div>
        <div className='whs-cart-add-products'>
          <h2>Your bag</h2>
          <div>
            {cart.map(({ name, price, picture, amount}, index) => (
              <div key={`${name}-${index}`}>
              {name} {price}$ x {amount}
              </div>
            ))}
          </div>
          <h3>Total: {total}$</h3>
          <button className='whs-cart-clear-button' onClick={() => updateCart([])}>Clear the cart</button>
          </div>
          <div className='whs-delivery'>
              <span>Estimated delivery </span>
          </div>
          <div className='whs-payment'>
            <span>We accept</span>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  ) : (
    <div className='whs-cart-closed'>
      <button 
        className='whs-cart-toggle-button-open'
        onClick={() => setIsOpen(true)}
        >
        <span>Open the cart</span>
        </button>
    </div>
  )
  }

export default Cart