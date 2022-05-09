import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoveCharacter from "./LoveCharacter";
import "./LoveCharactersList.css";
import "./LoveCharactersList.scss";
import heart_blue from "../../assets/images/heart_blue.svg";
import question_mark_blue from "../../assets/images/question_mark_blue.svg";
import sonMatch from "../../assets/sons/sonMatch.mp3";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const LoveCharactersList = () => {
  const [loveCharacters, setLoveCharacters] = useState([]);
  const [randomN, setRandomN] = useState(34);
  const [randomN2, setRandomN2] = useState(35);
  const [mysteryImage, setMysteryImage] = useState(question_mark_blue);
  const [trigger, setTrigger] = useState(false);

  const url = "http://localhost:8000/api/heroes";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setLoveCharacters(data));
  }, [randomN, randomN2]);

  function handleTrigger() {
    setTrigger(!trigger);
  }

  function randomLoveCharacter() {
    handleTrigger();

    let audio = new Audio(sonMatch);
    audio.play();
    let randomNumber = 1;
    let randomNumber2 = 1;

    while (randomNumber === randomNumber2) {
      randomNumber = Math.floor(Math.random() * 33);
      randomNumber2 = Math.floor(Math.random() * 33);
      setRandomN(randomNumber);
      setRandomN2(randomNumber2);
    }
  }

  return (
    <div className="LoveCharactersList">
      <div className="container-title">
        <h1 className="LoveCharactersList-title">Love is just a click away !</h1>
      </div>
      <h2 className="title-top3"> Top 3 female of the week</h2>
      <div className="love-cards-container">
        {loveCharacters &&
          loveCharacters
            .filter((loveCharacter) => {
              return (
                (loveCharacter.race !== "Mutant" &&
                  loveCharacter.gender !== "Male" &&
                  loveCharacter.name == "Super Marie") ||
                loveCharacter.name == "Super Steph" ||
                loveCharacter.name == "Super Vaish"
              );
            })
            .map((loveCharacter) => (
              <div key={loveCharacter.id}>
                <LoveCharacter loveCharacter={loveCharacter} />
              </div>
            ))}
      </div>

      <h2 className="title-top3"> Top 3 Male of the week</h2>
      <div className="love-cards-container">
        {loveCharacters &&
          loveCharacters
            .filter((loveCharacter) => {
              return (
                loveCharacter.race !== "Human" &&
                loveCharacter.race !== "Mutant" &&
                loveCharacter.gender !== "Female" &&
                loveCharacter.stamina >= 76
              );
            })
            .map((loveCharacter) => (
              <div key={loveCharacter.id}>
                <LoveCharacter loveCharacter={loveCharacter} />
              </div>
            ))}
      </div>

      <div className="container-match-card">
        <h2 className="title-match-card" id="title-match-card"></h2>
        <div className="container-trigger">
          {trigger && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("it’s a match !").start();
              }}
            />
          )}
        </div>
        <div className="container-heart-blue">
          <img src={heart_blue} alt="" />
        </div>
        <div className="container-match-card-img">
          <img
            className="picture-match-card img1"
            src={randomN !== 34 ? loveCharacters[randomN].picture : mysteryImage}
            alt="img hero 1"
          />

          <img
            className="picture-match-card img2"
            src={randomN2 !== 35 ? loveCharacters[randomN2].picture : mysteryImage}
            alt="img hero 2"
          />
        </div>
      </div>
      <div className="button-container btn1">
        <button className="button-match pulse" onClick={randomLoveCharacter}>
          LET’S MATCH !
        </button>
      </div>

      <div className="button-container btn2">
       <Link to="/fight" className="link"> <button className="button-war" >
          I prefer war
        </button>
        </Link>
      </div>
    </div>
  );
};

export default LoveCharactersList;
