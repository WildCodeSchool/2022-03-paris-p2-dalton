import { useEffect, useState } from "react";
import axios from "axios";
import TokenAccess from "./TokenAccess.jsx";

const CharacterList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://superheroapi.com/api/10228773588743778/70`)
        .then(response => response.json())
        .then(data => setResults(data))
  }, []);

  return (
    results.map(result => (
      <ul>
        <li>{result.name}</li>
        <li>{result.id}</li>
      </ul>
    ))
  )  
};

export default CharacterList