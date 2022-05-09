import React from 'react'
import './Shop.css';
import { useState } from 'react';
import Banner from '../../components/shopping/Banner';
import Cart from '../../components/shopping/Cart';
import ShoppingList from '../../components/shopping/ShoppingList';
import ContactForm from '../../components/shopping/ContactForm';

const Shop = () => {
  const [cart, updateCart] = useState([])
  return (
    <div>
      <Banner />
      <div>
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <ContactForm />
    </div>
  )
}

export default Shop