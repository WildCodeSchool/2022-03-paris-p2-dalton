import React, { useState } from 'react';
import './Character.css';
import { Link } from "react-router-dom"

// on passe la fonction getID en props afin d'isoler l'id de chacun des héros.
const Character = ({ character, fighters, setFighters, fighter1, setFighter1, getID } ) => {

  //const {fighters, setFighters} = (fighters, setFighters);
/*
  const addFighter = (e) => {
    //setFighters(e.target.value)
    if (fighters.length < 1) {
        setFighters(fighters.push(e.target.value))
    }/*  else if (fighters.length===1) {
      setFighters(e.target.value)
    }*/
    /*
  }*/


  const addFighter = (e) => {
    console.log(e.target)
    setFighter1(e.target)
  }

  return (
    <>
      <div className='character'>
        <div id={character.id} className='character-cards' onClick={getID}>
            <p>{character.name}</p>
            {/*<img className="character-img" onClick={characterSelected} alt={character.name} src={character.image} />
            <img className="character-img" alt={character.name} src={character.image} />*/}

            <img className="character-img" alt={character.name} src={character.image} />

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