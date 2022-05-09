import React from 'react';
import './styles/Banner.css';
import logo from '../../assets/images/logo.png';


const Banner = () => {
    const title = 'WildHereos Store'
  return (
    <div className='whs-banner'>
        <img src={logo} alt='Wild Hereos Store' className='whs-logo' />
        <h1 className='whs-title'>{title}</h1>
        </div>
  )
}

export default Banner