import React, { useState } from 'react';
import './Character.css';
import { Link } from "react-router-dom"

const Character = ({ character }) => {

  return (
    <div className='character'>
      <div className='character-cards'>
          <p>{character.name}</p>
          <Link to={{ pathname: `/character/${character.id}`}}>
              <img className="character-img" alt={character.name} src={character.image} />
          </Link>
      </div>
    </div>
  )
}

export default Character