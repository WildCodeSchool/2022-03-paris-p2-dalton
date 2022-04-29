import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoveCharacter from './LoveCharacter';
import "./LoveCharactersList.css";
import"./LoveCharactersList.scss";
import heart_blue from "../../assets/images/heart_blue.svg";
import question_mark_blue from "../../assets/images/question_mark_blue.svg";
import sonMatch from "../../assets/sons/sonMatch.mp3";



const LoveCharactersList = () => {
  const [loveCharacters, setLoveCharacters] = useState([]);
  const [randomN, setRandomN] = useState(34);
  const [randomN2, setRandomN2] = useState(35);
  const [mysteryImage, setMysteryImage] = useState(question_mark_blue);

  const url = "http://localhost:8000/api/heroes";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setLoveCharacters(data))
  }, [randomN, randomN2]);

 async function randomLoveCharacter(){
    function delay(n){
      return new Promise(function(resolve){
          setTimeout(resolve,n*1000);
      });
    }

    let audio = new Audio(sonMatch);
    audio.play();
    let randomNumber = 1;
    let randomNumber2 = 1;

    while(randomNumber === randomNumber2){

    randomNumber = Math.floor(Math.random() * 33);
    randomNumber2 = Math.floor(Math.random() * 33);
    setRandomN(randomNumber);
    setRandomN2(randomNumber2);
    delay(2)
    };
  }

  return (
    <div className="LoveCharactersList">
      <div className="title">
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
            {/* <img src ={heart_blue} alt="" /> */}
             <div className="container-match-card-img">
                <img className="picture-match-card img1" src = { 
                  randomN !== 34 ? loveCharacters[randomN].picture : mysteryImage} alt="img hero 1"/>

              <img className="picture-match-card img2" src={
                randomN2 !== 35 ? loveCharacters[randomN2].picture : mysteryImage} alt="img hero 2"/>
            </div>
        </div> 

    </div>
)
}


export default LoveCharactersList;
