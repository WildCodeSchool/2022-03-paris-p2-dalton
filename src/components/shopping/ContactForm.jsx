import React from 'react';
import { useState } from 'react';
import './styles/ContactForm.css';

const ContactForm = () => {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if ((!inputValue.includes('@'))) {
            alert("Attention, ceci n'est pas une adresse valide")
        }
    }

    // il faudra appeler le navigate = useNavigate
    // puis tu crées une fonction qui déclenche ce navigate avec un chemin en paramètre navigate("/home")
    // sur le onCLick du bouton, tu rappelles ta fonction


  return (
    <div className='whs-contactform'>
        <div className='whs-contactform-elem'>
            FOR SUPERHEREOS LOVERS
        </div>
        <div className='whs-contactform-elem'>Leave us your email:</div>
        <input
                placeholder='Enter your email'
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