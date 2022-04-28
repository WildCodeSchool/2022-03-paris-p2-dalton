import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoveCharacter from './LoveCharacter';
import "./LoveCharactersList.css";
import"./LoveCharactersList.scss";
import heart_blue from "../../assets/images/heart_blue.svg";
// import deux images ??? depuis assets
// import question_mark_blue from "../../assets/images/question_mark_blue.svg";



const LoveCharactersList = () => {
  const [loveCharacters, setLoveCharacters] = useState([]);
  const [randomN, setRandomN] = useState(31);
  const [randomN2, setRandomN2] = useState(32);
  const [mysteryImage, setMysteryImage] = useState("https://media.istockphoto.com/photos/anonymous-woman-covering-face-with-paper-picture-id1054899222?k=20&m=1054899222&s=612x612&w=0&h=tpZrkzhICatsGj8mcky967vOvY1jtm_bu3LlRC5vOAU=");
  // ici créer deux useState qui vont chacun prendre en valeur l'image importée

  const url = "http://localhost:8000/api/heroes";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setLoveCharacters(data))
  }, [randomN, randomN2]);

  console.log(randomN);

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
    let randomNumber;
    let randomNumber2;
 
    randomNumber = Math.floor(Math.random() * 30);
    randomNumber2 = Math.floor(Math.random() * 30);
    setRandomN(randomNumber)
    setRandomN2(randomNumber2)

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
            <img src ={heart_blue} alt="" />
             <div className="container-match-card-img">
                <img className="picture-match-card img1" src = { 
                  randomN !== 31 ? loveCharacters[randomN].picture : mysteryImage} alt="img hero 1"/>

              <img className="picture-match-card img2" src={
                randomN2 !== 32 ? loveCharacters[randomN2].picture : mysteryImage} alt="img hero 2"/>
            </div>
        </div> 

    </div>
)
}


export default LoveCharactersList;
