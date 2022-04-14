import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoveCharacter from './LoveCharacter';

const LoveCharactersList = () => {
  const [loveCharacters, setLoveCharacters] = useState([]);

  const url = "https://lit-badlands-40023.herokuapp.com/heros";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setLoveCharacters(data));
  }, []);

  return (
    <div className="loveCharactersList">
        <h2 className="LoveCharactersList-title">L'amour a votre portée en un clic !</h2>
        <div className='cards-container'>
            { loveCharacters &&
            loveCharacters.map((loveCharacter) => (
                <div key={loveCharacter.id}>
                    <LoveCharacter loveCharacter={loveCharacter} />
                </div>
            ))}
        </div>
    </div>
)
}


export default LoveCharactersList;
