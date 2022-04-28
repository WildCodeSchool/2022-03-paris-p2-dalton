import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoveCharacter from './LoveCharacter';
import "./LoveCharactersList.css";
import"./LoveCharactersList.scss";
import heart_blue from "../../assets/images/heart_blue.svg";



const LoveCharactersList = () => {
  const [loveCharacters, setLoveCharacters] = useState([]);
  const [randomN, setRandomN] = useState(0);
  const [randomN2, setRandomN2] = useState(0)

  const url = "http://localhost:8000/api/heroes";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setLoveCharacters(data));
  }, []);


 // Mon tableau se nomme loveCharacters je veux afficher aléatoirement 2 lovecharacter

  // function randomLoveCharacter(){
  //   let randomNumber = 1;
  //   let randomNumber2 = 1;

  //   while(randomNumber === randomNumber2){

  //   randomNumber = Math.floor(Math.random() * 30);
  //   randomNumber2 = Math.floor(Math.random() * 30);
  //   setRandomN(randomNumber);
  //   setRandomN2(randomNumber2);
  //   };
  // }

  function randomLoveCharacter(){
    let randomNumber = 2;
    let randomNumber2 = 1;
    do{
      randomNumber = Math.floor(Math.random() * 30);
    randomNumber2 = Math.floor(Math.random() * 30);
    setRandomN(randomNumber);
    setRandomN2(randomNumber2);
   }while(randomNumber === randomNumber2);
  }
  return (
    <div className="LoveCharactersList">
      <div className="title">
        {/* <img src={arrow} alt="" /> */}
        <h2 className="LoveCharactersList-title">Love is just a click away !</h2>
        </div>
        <div className='love-cards-container'>
            {loveCharacters &&
            loveCharacters.map((loveCharacter) => (
              <div key={loveCharacter.id}>
                    <LoveCharacter loveCharacter={loveCharacter} />
                </div>
            ))}
        </div>
        <div className="button-container"> 
            <button className="button-match pulse" onClick={randomLoveCharacter}>LET’S MATCH !</button>
        </div> 

         <div className="container-match-card">
            <h1 className="title-match-card">it’s a match !</h1> 
            <img src ={heart_blue} alt="" />
             <div className="container-match-card-img">
                <img className="picture-match-card img1" src = {loveCharacters[randomN].picture} alt={loveCharacters[randomN].name}/>

              <img className="picture-match-card img2" src={loveCharacters[randomN2].picture} alt={loveCharacters[randomN2].name}/>
            </div>
        </div>

    </div>
)
}


export default LoveCharactersList;
