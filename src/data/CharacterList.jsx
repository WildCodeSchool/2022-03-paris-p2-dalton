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

  const [live1, setLive1] = useState(fighter1.stamina);
  const [live2, setLive2] = useState(fighter2.stamina);

  let damage;

  const fight = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    function delay(n){
      return new Promise(function(resolve){
          setTimeout(resolve,n*1000);
      });
    }

    damage = getRandomInt(fighter1.force/10);

     const fightStart = async (fighterA, liveA, setLiveA, fighterB, liveB, setLiveB) => {


      while (liveA>0 && liveB>0) {

        damage = getRandomInt(fighterA.force/10)
        liveB=liveB-damage
        setLiveB(liveB) 

        if (liveB<0) {
          break;
        }

        if (liveB<(fighterB.stamina*2/3)) {
          document.getElementsByClassName('imgHeart2Fighter1').src={heartVide}
        } 
        if (liveB<(fighterB.stamina/3)) {
          document.getElementsByClassName('imgHeart2Fighter2').src={heartVide}
        }
        if (liveB<0) {
          document.getElementsByClassName('imgHeart2Fighter3').src={heartVide}
        }   


        damage = getRandomInt(fighterB.force/10)
        liveA=liveA-damage
        setLiveA(liveA) 

        if (liveA<(fighterA.stamina*2/3)) {
          document.getElementsByClassName('imgHeart1Fighter1').src={heartVide}
        } 
        if (liveA<(fighterA.stamina/3)) {
          document.getElementsByClassName('imgHeart1Fighter2').src={heartVide}
        }
        if (liveA<0) {
          document.getElementsByClassName('imgHeart1Fighter3').src={heartVide}
        }

        await delay(1);

      }
      return true;
    }

    if (fighter1.speed>fighter2.speed) {
      fightStart(fighter1, fighter1.stamina, setLive1, fighter2, fighter2.stamina, setLive2);
    } else {
      fightStart(fighter2, fighter2.stamina, setLive2, fighter1, fighter1.stamina, setLive1);
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
          <img className="imgFighter1 selected" src={fighter1.image} alt="name" />
          <div className="midleBlock"></div>
          <div className="fighter1Info">
            <h4>{fighter1.name}</h4>
            <h5>Strenght : {fighter1.force}</h5>
            <h5>Stamina : {fighter1.stamina}</h5>
            <h5>Speed : {fighter1.speed}</h5>
            <h5>Vie : {live1}</h5>
          <div className="heart selected">
              <img className="imgHeart imgHeart1Fighter1" src={heart} alt="Coeur" />
              <img className="imgHeart imgHeart2Fighter1" src={heart} alt="Coeur" />
              <img className="imgHeart imgHeart3Fighter1" src={heart} alt="Coeur" />
            </div>
          </div>
        </div>
        <div className="fighter2 selected">
          <img className="imgFighter2 selected" src={fighter2.image} alt="name" />
          <div className="midleBlock"></div>
          <div className="fighter2Info">
            <h4>{fighter2.name}</h4>
            <h5>Strenght : {fighter2.force}</h5>
            <h5>Stamina : {fighter2.stamina}</h5>
            <h5>Speed : {fighter2.speed}</h5>
            <h5>Vie : {live2}</h5>
            <div className="heart selected">
              <img className="imgHeart imgHeart1Fighter2" src={heart} alt="Coeur" />
              <img className="imgHeart imgHeart2Fighter2" src={heart} alt="Coeur" />
              <img className="imgHeart imgHeart3Fighter2" src={heart} alt="Coeur" />
            </div>
          </div>
        </div>          
      </div>
      <div className="pannelButton">
        <button className="fightButton" onClick={fight}>Let's fight!</button>
      </div>
    </div>
  )
};

export default CharacterList