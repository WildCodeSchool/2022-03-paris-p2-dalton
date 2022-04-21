import React from 'react'
import './Shop.css';
import Banner from '../../components/shopping/Banner';
import Cart from '../../components/shopping/Cart';
import ShoppingList from '../../components/shopping/ShoppingList';

const Shop = () => {
  return (
    <div>
      <Banner />
      <Cart />
      <ShoppingList />
    </div>
  )
}

export default Shop