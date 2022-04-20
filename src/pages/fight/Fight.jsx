import CharacterList from "../../data/CharacterList.jsx";
import Characters from "../../data/Characters.jsx";
import './Fight.css';
import heart from '../../assets/images/heart_full.svg'
import heartVide from '../../assets/images/heart_empty.svg'


const Fight = () => {

  const fighter1 = Characters[4];
  const fighter2 = Characters[1];

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
                <div className="heart selected">
                  <img className="imgHeart imgHeart1Fighter1" src={heartVide} alt="Coeur" />
                  <img className="imgHeart imgHeart2Fighter1" src={heartVide} alt="Coeur" />
                  <img className="imgHeart imgHeart3Fighter1" src={heartVide} alt="Coeur" />
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
      </div>
    );
}    

export default Fight