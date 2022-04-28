import { useEffect, useState } from "react";
import axios from "axios";
import FightCharacter from './FightCharacter';
import "./FightCharacterList.css"
import heart from '../../assets/images/heart_full.svg'
import heartVide from '../../assets/images/heart_empty.svg'
import deadHead from '../../assets/images/cross-296395__340.webp'
import stef from "../../assets/images/steph.jpeg"
import marie from "../../assets/images/marie_toon.jpg"
import vaishnavi from "../../assets/images/vaishnavi_projet2.jpeg"
import eric from "../../assets/images/eric2.jpg"
import splash from "../../assets/images/comic-book-speech-bubble-splash.png"
import soundPain1 from '../../assets/sons/male/VOXEfrt_Cri de douleur (ID 2361)_LS.wav'
import soundPain2 from '../../assets/sons/male/VOXScrm_Cri wilhelm (ID 0477)_LS.wav'
import soundPain3 from '../../assets/sons/FGHTBf_Chute de corps 1 (ID 2452)_LS.wav'
import soundPain4 from '../../assets/sons/FGHTBf_Chute de corps 3 (ID 2454)_LS.wav'
import soundPain5 from '../../assets/sons/FGHTImpt_Coup de poing 6 (ID 2461)_LS.wav'
import soundPain6 from '../../assets/sons/HMNHart_Battement de coeur 1 (ID 0243)_LS.wav'
import soundDead from '../../assets/sons/haharir.mp3'
import soundApplause from '../../assets/sons/CRWDCheer_Applaudissements concert bar 1 (ID 2479)_LS.wav'


const FightCharacterList = () => {

  // STATES
  const [characters, setCharacters] = useState([])

  const [imgFighter1, setimgFighter1] = useState(true)
  const [imgFighter2, setimgFighter2] = useState(true)

  const [fighter1, setFighter1] =useState({})
  const [isVisibleH1Fighter1, setIsVisibleH1Fighter1] = useState(true)
  const [isVisibleImgFighter1, setIsVisibleImgFighter1] = useState(false)

  const [fighter2, setFighter2] =useState({})
  const [isVisibleH1Fighter2, setIsVisibleH1Fighter2] = useState(true)
  const [isVisibleImgFighter2, setIsVisibleImgFighter2] = useState(false)

  const [isVisibleWinner, setIsVisibleWinner] = useState(false)


   // GESTION API
  const url = "https://lit-badlands-40023.herokuapp.com/heros/";

  useEffect(() => {
    axios
      .get(url)
        .then(res => res.data)
        .then(data => setCharacters(data)) 
  }, []);


  // GESTION CHANGEMENT D'IMAGE SUR CLIC
  const changeImgFighter1 = () => {
    setimgFighter1(!imgFighter1)
  }

  const changeImgFighter2 = () => {
    setimgFighter2(!imgFighter2)
  }


  // FIGHT  
  // on passe la fonction getID en props afin d'isoler l'id de chacun des héros.
  const getID = (e) => {
    //console.log(e.currentTarget.id);

    if (fighter1.id>-1) {      
      setIsVisibleH1Fighter2(false)
      setFighter2(characters[e.currentTarget.id])   
      setIsVisibleImgFighter2(true);
    } else {
      setIsVisibleH1Fighter1(false)
      setFighter1(characters[e.currentTarget.id])
      setIsVisibleImgFighter1(true);
    }
  }

  const [live1, setLive1] = useState(fighter1.stamina);
  const [live2, setLive2] = useState(fighter2.stamina);

  const cris = [soundPain1,soundPain2,soundPain3,soundPain4,soundPain5,soundPain6]

  
  const fight = () => {

    let damage;

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    function delay(n){
      return new Promise(function(resolve){
          setTimeout(resolve,n*1000);
      });
    }

    const fightStart = async (fighterA, idFighterA, liveA, imgFighterA, setLiveA, idHeartAImg1, idHeartAImg2, idHeartAImg3, fighterB, idFighterB, liveB, imgFighterB, setLiveB, idHeartBImg1, idHeartBImg2, idHeartBImg3) => {

      while (liveA>0 && liveB>0) {
        let audio = new Audio(cris[getRandomInt(5)]);

        damage = getRandomInt(fighterA.force/10)
        liveB=liveB-damage
        setLiveB(liveB) 

        // Fighter A attack
        audio.play();
        if (liveB<=0) {
          document.getElementById(idHeartBImg1).src=heartVide
        }  else
        if (liveB<(parseInt(fighterB.stamina)/3)) {
          document.getElementById(idHeartBImg2).src=heartVide
        } else
        if (liveB<(parseInt(fighterB.stamina)*2/3)) {
          document.getElementById(idHeartBImg3).src=heartVide
        }

        // Fighter B attack
        if (liveB>0) {
          damage = getRandomInt(fighterB.force/10)
          liveA=liveA-damage
          setLiveA(liveA) 
          audio.play();
  
          if (liveA<=0) {
            document.getElementById(idHeartAImg1).src=heartVide
          } else
          if (liveA<(parseInt(fighterA.stamina)/3)) {
            document.getElementById(idHeartAImg2).src=heartVide
          } else
          if (liveA<(parseInt(fighterA.stamina)*2/3)) {
            document.getElementById(idHeartAImg3).src=heartVide
          } 
        }
        
        await delay(1);

        // Display Dead head with laugh
        if ((liveA<=0) || (liveB<=0)) {
          if (liveA<=0) {
            document.getElementById(imgFighterA).src=deadHead
          } else
          {
            document.getElementById(imgFighterB).src=deadHead
          } 

          let audioDead = new Audio(soundDead);
          audioDead.play();
          await delay(5);

          // Winner management
          if (liveA<=0) {
            const element =document.getElementById(idFighterA)
            element.remove()
          } else {
            const element =document.getElementById(idFighterB)
            element.remove()
          }

          let audioApplause = new Audio(soundApplause);
          audioApplause.play();
          setIsVisibleWinner(true)

          await delay(6);
          window.top.location = window.top.location
        }
      }
    }

    if (fighter1.speed>fighter2.speed) {
      fightStart(fighter1, "fighter1", fighter1.stamina, "imgFighter1", setLive1, "imgHeart1Fighter1", "imgHeart2Fighter1", "imgHeart3Fighter1", fighter2, "fighter2", fighter2.stamina, "imgFighter2", setLive2, "imgHeart1Fighter2", "imgHeart2Fighter2", "imgHeart3Fighter2");
    } else {
      fightStart(fighter2, "fighter2", fighter2.stamina, "imgFighter2", setLive2, "imgHeart1Fighter2", "imgHeart2Fighter2", "imgHeart3Fighter2", fighter1, "fighter1", fighter1.stamina, "imgFighter1", setLive1, "imgHeart1Fighter1", "imgHeart2Fighter1", "imgHeart3Fighter1");
    }
  }



  return (
    <div>
      <div className="characterList">
          <div className='cards-container'>
              { characters &&
              characters.map((character) => (
                <FightCharacter character={character} key={character.id} getID={getID} />
              ))}
          </div>
      </div>
      <div className="container-select-hero">
        {isVisibleH1Fighter1 &&
          <h2>Select hero 1</h2>
        }  
        {isVisibleH1Fighter2 &&
          <h2>Select hero 2</h2>
        }  
        {isVisibleWinner &&
          <h1>Winner</h1>
        }  
      </div>
      <div className="fighters">
        <div id="fighter1">
          <div className="container-fighterImg">
          {isVisibleImgFighter1 &&
            <img id="imgFighter1" src={fighter1.image}  alt="imgFighter1" />
            
          }
          {!isVisibleImgFighter1 &&
            <img id="imgFighter1" onClick={changeImgFighter1}  src={( imgFighter1 ? stef : vaishnavi)} alt="imgFighter1" />
          }
          </div>
          <div className="midleBlock"></div>
          <div className="fighter1Info">
            {isVisibleImgFighter1 &&
              <h4>{fighter1.name}</h4>
            }  
            {!isVisibleImgFighter1 &&
              <h4>{imgFighter1 ? "Stéphanie" : "Vaishnavi"}</h4>
            }
            <h5>Strenght : {fighter1.force}</h5>
            <h5>Stamina : {fighter1.stamina}</h5>
            <h5>Speed : {fighter1.speed}</h5>
            <h5>Live : {live1}</h5>
          <div className="heart">
              <img id="imgHeart1Fighter1" src={heart} alt="Coeur" />
              <img id="imgHeart2Fighter1" src={heart} alt="Coeur" />
              <img id="imgHeart3Fighter1" src={heart} alt="Coeur" />
            </div>
          </div>
        </div>
        <div id="fighter2">
          <div className="container-fighterImg">
            {isVisibleImgFighter2 &&  
              <img id="imgFighter2" src={fighter2.image} alt="imgFighter2" />
            }
            {!isVisibleImgFighter2 &&  
            <img id="imgFighter2" onClick={changeImgFighter2} src={imgFighter2 ? marie : eric}  alt="imgFighter2" />
            }
          </div>
          <div className="midleBlock"></div>
          <div className="fighter2Info">
           {isVisibleImgFighter2 &&
              <h4>{fighter2.name}</h4>
            }  
            {!isVisibleImgFighter2 &&
              <h4>{imgFighter2 ? "Marie" : "Eric"}</h4>
            }
            <h5>Strenght : {fighter2.force}</h5>
            <h5>Stamina : {fighter2.stamina}</h5>
            <h5>Speed : {fighter2.speed}</h5>
            <h5>Live : {live2}</h5>
            <div className="heart">
              <img id="imgHeart1Fighter2" src={heart} alt="Coeur" />
              <img id="imgHeart2Fighter2" src={heart} alt="Coeur" />
              <img id="imgHeart3Fighter2" src={heart} alt="Coeur" />
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

export default FightCharacterList
