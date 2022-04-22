import CharacterList from "../../data/CharacterList.jsx";
import { useState } from "react";
import Characters from "../../data/Characters.jsx";
import './Fight.css';
import heart from '../../assets/images/heart_full.svg'
import heartVide from '../../assets/images/heart_empty.svg'


const Fight = () => {

  const fighter1 = Characters[4];
  const fighter2 = Characters[1];

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
      <div className="pageFight">
        <div className="introduce">
          <p>Pick a hero and do a fight !</p>
          <p>Let's go bitches</p>
        </div>
        <div>
          <CharacterList />
        </div>
        <div>
          
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
      </div>
    );
}    

export default Fight