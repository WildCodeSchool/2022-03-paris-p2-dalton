import React from 'react'
import './Shop.css';
import Banner from '../../components/shopping/Banner';
import Cart from '../../components/shopping/Cart';
import ShoppingList from '../../components/shopping/ShoppingList';
import ContactForm from '../../components/shopping/ContactForm';

const Shop = () => {
  return (
    <div>
      <Banner />
      <Cart />
      <ShoppingList />
      <ContactForm />
    </div>
  )
}

export default Shop