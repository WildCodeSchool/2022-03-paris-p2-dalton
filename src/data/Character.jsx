import React, { useState } from 'react';
import './Character.css';
import { Link } from "react-router-dom"

const Character = ({ character }) => {

  const [fighters, setFighters] =useState([{},{}]);

  const addFighter = (e) => {
    if (fighters.length<1) {
      setFighters( {[e.target.value]: e.target.value})
    } 
  }

  return (
    <>
      <div className='character'>
        <div className='character-cards'>
            <p>{character.name}</p>
            {/*<img className="character-img" onClick={characterSelected} alt={character.name} src={character.image} />
            <img className="character-img" alt={character.name} src={character.image} />*/}

            <img className="character-img" onClick={addFighter} alt={character.name} src={character.image} />

  {/*
            <Link to={{ pathname: `/character/${character.id}`}}>
                <img className="character-img" alt={character.name} src={character.image} />
            </Link>
          */}
        </div>
      </div>
     
    </>

  )
}

export default Character