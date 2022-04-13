//import { useState } from "react";
//import CharacterList from "../../data/CharacterList.jsx";
import Characters from "../../data/Characters.jsx";
import './Fight.css';


//const MAX_LIFE = 100; // fighters have 100 max life points

/*
{ "id": "1", "name": "A-Bomb", "powerstats":     {"intelligence": "38", "strength": "100", "speed": "17", "durability": "80", "power": "24", "combat": "64" },
{ "id":"70", "name": "Batman", "powerstats":     {"intelligence": "100", "strength": "26", "speed": "27", "durability": "50", "power": "47", "combat": "100"},
{"id": "341","name":"Indiana Jones","powerstats":{"intelligence": "69",  "strength": "10", "speed": "17", "durability": "30", "power": "19", "combat": "30" },
{"id": "69", "name": "Batman",      "powerstats":{"intelligence": "81",  "strength": "40", "speed": "29", "durability": "55", "power": "63", "combat": "90" },
{"id": "531","name": "Purple Man",  "powerstats":{"intelligence": "56",  "strength": "10", "speed": "8",  "durability": "30", "power": "92", "combat": "10" },
{"id": "480","name": "Mystique",    "powerstats":{"intelligence": "75",  "strength": "12", "speed": "23", "durability": "64", "power": "64", "combat": "74" }
*/

/* Règles du combat    
    Celui qui a la plus grande speed commence
    La durability correspond aux points de vie
    Dégats = random 1..((power + combat)/4) - random 1..speed/3 de l'adversaire
    Dégats = random 1..((power + combat)/10)
    Batman > Abomb = 1..(147/3) - 1..(17/3) = 1..49   - 1..5,6
    Abomb > Batman = 1..( 88/3) - 1..(27/3) = 1..29,3 - 1..9
    Batman > Indiana = 1..(147/4) - 1..(17/3) = 1..37,25 - 1..5,6
    Indiana > Batman = 1..( 49/4) - 1..(27/3) = 1..12,25 - 1..9
    Dégats = random 1..((power + combat)/20) 
    Batman > Indiana = 1..(147/20) = 1..7,35 
    Indiana > Batman = 1..( 49/20) - 1..2,45
*/

const Fight = () => {

  const fighter1 = Characters[0];
  const fighter2 = Characters[1];

    //const [fighter1Live, setfighter1Live] = useState(fighter1.powerstats.)
//    return fighter1.name;
    return (
      <div>
        <div className="fighters2">
          <div>
            <div className="hearth"></div>
            <h3>{fighter1.name}</h3>
            <div className="fighter1"></div>
          </div>
          <div>
            <button className="fightButton">Combat</button>
          </div>
          <div>
            <h3>{fighter2.name}</h3>
            <div className="fighter2"></div>
            <div className="hearth"></div>
          </div>          
        </div>
      </div>
    );
}    

{/*
<div className="fighters">
  <div className="fighter">
    <h3>{fighter1.name}</h3>
    <img alt="fighter1" src={fighter1.image.url} />
  </div>
  <div className="fighter">
    <h3>{fighter2.name}</h3>
    <img alt="fighter2" src={fighter2.image.url} />
  </div>
  </div> 

      </div>
    );

}*/}

//console.log(Fight(Characters[0], Characters[1]));

//console.log('Coucou');
/*
class Fighter {
//    name: name of the fighter.
//  strength: will be used to calculate the damage points during an attack.
//  dexterity: will be used to calculate the defense points that will limit the damage received.
// life: initialized to MAX_LIFE, so they all start with 100 life points.

    constructor(name, strength, dexterity, life) {
      this.name = name;
      this.strength = strength;
      this.dexterity = dexterity;
      this.life = life;
    }


    attack(attacked){

      let damage;

      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }


      damage = getRandomInt(this.strength) - attacked.dexterity;
      
      if (damage < 0) { damage = 0; } 

      //console.log(attacked.life);
      attacked.life = attacked.life - damage;
      if (attacked.life<0) {attacked.life=0};
      //console.log(attacked.life)
 
      return `
      ${this.name} attack ${attacked.name} !
        ${this.name} attack for ${damage} damage to ${attacked.name}.
        ${attacked.name} has now ${attacked.life} live.`;
    }
}*/

export default Fight