import { useEffect, useState } from "react";
import axios from "axios";
import Character from './Character';
import "./CharacterList.css"
import heart from '../assets/images/heart_full.svg'
import heartVide from '../assets/images/heart_empty.svg'

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [fighter1, setFighter1] =useState({});
  const [fighter2, setFighter2] =useState({});
  const url = "https://lit-badlands-40023.herokuapp.com/heros/";

  useEffect(() => {
    axios
      .get(url)
        .then(res => res.data)
        .then(data => setCharacters(data))
 
  }, []);

  // on passe la fonction getID en props afin d'isoler l'id de chacun des héros.
  const getID = (e) => {
    //console.log(e.currentTarget.id);
    if (fighter1.id>-1) {
      setFighter2(characters[e.currentTarget.id])   
    } else {
      setFighter1(characters[e.currentTarget.id])
    }
  }

  return (
    <div>
      <div className="characterList">
          <div className='cards-container'>
              { characters &&
              characters.map((character) => (
                <Character character={character} key={character.id} getID={getID} />
              ))}
          </div>
      </div>
      <div className="fighters">
        <div className="fighter1 selected">
          <div className="image">
            <img className="imgFighter1 selected" src={fighter1.image} alt="name" />
          </div>
          <div className="midleBlock"></div>
          <div className="fighter1Info">
            <h4>{fighter1.name}</h4>
            <h5>Strenght : {fighter1.force}</h5>
            <h5>Stamina : {fighter1.stamina}</h5>
            <h5>Speed : {fighter1.speed}</h5>
            <div className="heart selected">
              <img className="imgHeart imgHeart1Fighter1" src={heartVide} alt="Coeur" />
              <img className="imgHeart imgHeart2Fighter1" src={heartVide} alt="Coeur" />
              <img className="imgHeart imgHeart3Fighter1" src={heartVide} alt="Coeur" />
            </div>
          </div>
        </div>
        <div className="fighter2 selected">
          <div className="image">
            <img className="imgFighter2 selected" src={fighter2.image} alt="name" />
          </div>
          <div className="midleBlock"></div>
          <div className="fighter2Info">
            <h4>{fighter2.name}</h4>
            <h5>Strenght : {fighter2.force}</h5>
            <h5>Stamina : {fighter2.stamina}</h5>
            <h5>Speed : {fighter2.speed}</h5>
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