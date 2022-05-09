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




//     <div className='whs-cart'>
//       <button onClick={() => setIsOpen(false)}>Close the basket</button>
//         <h2>Panier</h2>
//         <div className='cart'>
//           Card 1 : {cardPrice}€
//           <button onClick={() => updateCart(cart + 1)}>Add</button>
//         </div>
//         <h3>Total : {cardPrice * cart}€</h3>
//         <button onClick={() => updateCart(0)}>Clear the basket</button>
//     </div>
//   ) : (
//     <button className='btn-open-cart' onClick={() => setIsOpen(true)}>Open the basket<img src={basket} alt='basket' width='30' heigth='30' /></button>
//   )
// }