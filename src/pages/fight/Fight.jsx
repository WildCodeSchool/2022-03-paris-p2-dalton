import Characters from "../../data/Characters.jsx";
import './Fight.css';


const Fight = () => {

  const fighter1 = Characters[0];
  const fighter2 = Characters[1];

    return (
      <div>
        <div className="fighters">
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

export default Fight