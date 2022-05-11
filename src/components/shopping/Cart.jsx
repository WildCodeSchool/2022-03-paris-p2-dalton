import React from 'react';
import './styles/Cart.css';
import { useState } from 'react';
import visacard from '../../assets/images/visacard.png';
import mastercard from '../../assets/images/mastercard.png';
import paypal from '../../assets/images/paypal.png';

const Cart = ({cart, updateCart}) => {
  const [isOpen, setIsOpen] = useState(false)
  const total  = cart.reduce(
    (acc, shopping) => acc + shopping.amount * shopping.price, 0
  )

  return isOpen ? (
    <div className='whs-cart'>
      <div className='whs-button-close'>
      <button 
        className='whs-cart-toggle-button-close'
        onClick={() => setIsOpen(!isOpen)}
      >
      <span>Close the cart</span>
      </button>
      </div>
      {cart.length > 0 ? (
        <div className='whs-cart-container'>
        <div className='whs-cart-add-products'>
          <h2 className='whs-bag'>Your bag</h2>
          <div>
            {cart.map(({ name, price, amount}, index) => (
              <div key={`${name}-${index}`}>
              <span>{name} {price}€ </span>
              <span>x ({amount})</span>
              </div>
            ))}
          </div>
          <h3 className='whs-total'>Total: {total}€</h3>
          <div className='whs-cart-buttons'>
          <button className='whs-cart-clear-button' onClick={() => updateCart([])}>Clear the cart</button>
          <button className='whs-cart-checkout-button'>To Go Checkout</button>
          </div>
          </div>
          <div className='whs-delivery'>
              <span className='whs-delivery-span'>Estimated delivery :</span>
              <span>Wed, 16.05. - Fri, 18.05.</span>
          </div>
          <div className='whs-payment'>
            <>
            <span className='whs-payment-span'>We accept :</span>
            </>
          <div className='whs-payment-cards'>
            <img src={mastercard} width='30' height='30' />
            <img src={visacard} width='30' height='30'/>
            <img src={paypal} width='30' height='30' />
          </div>
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
        onClick={() => setIsOpen(!isOpen)}
        >
        <span>Open the cart</span>
        </button>
    </div>
  )
  }

export default Cart