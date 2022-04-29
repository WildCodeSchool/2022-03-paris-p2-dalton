import React from 'react';
import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, ceci n'est pas une adresse valide")
        }
    }

  return (
    <div className='whs-contactform'>
        <div className='whs-contactform-elem'>
            FOR SUPERHEREOS LOVERS
        </div>
        <div className='whs-contactform-elem'>Leave us your email:</div>
        <input
                placeholder='                               Enter your email'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
                className='whs-contactform-input'
        />
        <button className='whs-contactform-submit'>SUBMIT</button>
    </div>
  )
}

export default ContactForm