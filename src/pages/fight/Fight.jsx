import CharacterList from "../../data/CharacterList.jsx";
import './Fight.css';

const Fight = () => {

    return (
      <div className="pageFight">
        <div className="introduce">
          <p>Pick a hero and do a fight !</p>
          <p>Let's go bitches</p>
        </div>
        <div>
          <CharacterList />
        </div>
      </div>
    );
}    

export default Fight