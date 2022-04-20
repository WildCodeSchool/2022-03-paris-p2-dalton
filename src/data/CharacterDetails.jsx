import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = () => {
    const [characterInfos, setCharacterInfos] = useState([]);
    const params = useParams();

    const url = "https://lit-badlands-40023.herokuapp.com/heros/";

    useEffect(() => {
        axios
        .get(`${url}${params.id}`)
        .then((res) => res.data)
        .then((data) => setCharacterInfos(data))
    }, [params.id])

  return (
    <div>
      <div>{characterInfos.name}</div>
      {console.log(characterInfos.name)}
    {/*  <img alt="characterInfos.name" src={characterInfos.image} />*/}
    </div>
  )
}

export default CharacterDetails