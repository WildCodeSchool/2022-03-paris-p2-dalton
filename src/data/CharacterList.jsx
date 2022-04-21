import { useEffect, useState } from "react";
import axios from "axios";
import Character from './Character';
import "./CharacterList.css"
import heart from '../assets/images/heart_full.svg'
import heartVide from '../assets/images/heart_empty.svg'

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [fighters, setFighters] =useState([{},{}]);
  const url = "https://lit-badlands-40023.herokuapp.com/heros/";

  useEffect(() => {
    axios
      .get(url)
        .then(res => res.data)
        .then(data => setCharacters(data))
 
  }, []);

  return (
    <div>
      <div className="characterList">
          <div className='cards-container'>
              { characters &&
              characters.map((character) => (
                <Character character={character} />
              ))}
          </div>
      </div>
      <div className="fighters">
        <div className="fighter1 selected">
          <div>
            <img className="imgFighter1 selected" src={fighters[0].image} alt="name" />
          </div>
          <div className="midleBlock"></div>
          <div className="fighter1Info">
            <h4>{fighters[0].name}</h4>
            <h5>Strenght : {fighters[0].force}</h5>
            <h5>Stamina : {fighters[0].stamina}</h5>
            <h5>Speed : {fighters[0].speed}</h5>
            <div className="heart selected">
              <img className="imgHeart imgHeart1Fighter1" src={heartVide} alt="Coeur" />
              <img className="imgHeart imgHeart2Fighter1" src={heartVide} alt="Coeur" />
              <img className="imgHeart imgHeart3Fighter1" src={heartVide} alt="Coeur" />
            </div>
          </div>
        </div>
        <div className="fighter2 selected">
          <img className="imgFighter2 selected" src={fighters[1].image} alt="name" />
          <div className="midleBlock"></div>
          <div className="fighter2Info">
            <h4>{fighters[1].name}</h4>
            <h5>Strenght : {fighters[1].force}</h5>
            <h5>Stamina : {fighters[1].stamina}</h5>
            <h5>Speed : {fighters[1].speed}</h5>
            <div className="heart selected">
              <img className="imgHeart imgHeart1Fighter2" src={heart} alt="CoeurVide" />
              <img className="imgHeart imgHeart2Fighter2" src={heart} alt="CoeurVide" />
              <img className="imgHeart imgHeart3Fighter2" src={heart} alt="CoeurVide" />
            </div>
          </div>
        </div>          
      </div>
      <div className="pannelButton">
        <button className="fightButton">Let's fight!</button>
      </div>
    </div>

  )
};

export default CharacterList