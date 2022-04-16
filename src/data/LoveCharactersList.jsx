import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoveCharacter from './LoveCharacter';
import "./LoveCharactersList.css";

const LoveCharactersList = () => {
  const [loveCharacters, setLoveCharacters] = useState([]);

  const url = "https://lit-badlands-40023.herokuapp.com/heros";
  const[trigger, setTrigger]= useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setLoveCharacters(data));
  }, [trigger]);

  function handleLoveCharacter(){
    setTrigger(!trigger);
  }
  return (
    <div className="LoveCharactersList">
        <h2 className="LoveCharactersList-title">Love is just a click away !</h2>
        <img src="" alt="" />
        <button onClick={handleLoveCharacter}>Match</button>
        <div className='love-cards-container'>
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
