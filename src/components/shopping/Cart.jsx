import React from 'react';
import './Cart.css';
import { useState } from 'react';

const Cart = () => {
  const cardPrice = 10
  const [cart, updateCart] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className='whs-cart'>
      <button onClick={() => setIsOpen(false)}>Close the basket</button>
        <h2>Panier</h2>
        <div className='cart'>
          Card 1 : {cardPrice}€
          <button onClick={() => updateCart(cart + 1)}>Add</button>
        </div>
        <h3>Total : {cardPrice * cart}€</h3>
        <button onClick={() => updateCart(0)}>Clear the basket</button>
    </div>
  ) : (
    <button className='btn-open-cart' onClick={() => setIsOpen(true)}>Open the basket</button>
  )
}

export default Cart