/* Fighter class definition */

const MAX_LIFE = 100; // fighters have 100 max life points

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
}

      //This.name has ${this.life} now!!`;

      /*The fighter will hit with more or less success each time, 
      the number of points of damage that the ** attacker ** 
      does will therefore be a random number between 1 and the strength 
      of the fighter (use Math.random () ( [Documentation] 
        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), 
        and if needed some advices from this article)
      But the attacked can defend and dodge! You will therefore mitigate the damage by subtracting 
      the damage from the dexterity of the attacked (without never going below zero)
      return `${this.name} ${this.attackName} you!`;*/

export default Fighter;
