import { useEffect, useState } from "react";
import axios from "axios";
import Character from './Character';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  const url = "https://lit-badlands-40023.herokuapp.com/heros/";

  useEffect(() => {
    axios
      .get(url)
        .then(res => res.data)
        .then(data => setCharacters(data))
 
  }, []);

  return (
    <div className="characterList">
        <h2 className="section-title characterList-title">Faîtes votre choix !</h2>
        <div className='cards-container'>
            { characters &&
            characters.map((character) => (
                    <Character character={character} />
            ))}
        </div>
    </div>
  )
};

export default CharacterList
