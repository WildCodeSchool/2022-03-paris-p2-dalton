import { useEffect, useState } from "react";
import axios from "axios";
import TokenAccess from "./TokenAccess.jsx";

/*
const CharacterList = () => {
  const [repos, setRepos] = useState([]);
  const urlApi =  `https://superheroapi.com/api/${TokenAccess}/1`;
  console.log(urlApi);

/*
  // TODO : load the repos into state when the component mounts
  useEffect(() => {
    axios
      .get(
        //urlApi
        //`https://superheroapi.com/api/${TokenAccess}/1`
        "https://superheroapi.com/api/10228773588743778/1"
      )
      .then((res) => res.data.results)
      .then((repos) => setRepos(repos))
      console.log(repos)
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);
}

export default CharacterList
*/

const CharacterList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://superheroapi.com/api/10228773588743778/70`)
        .then(response => response.json())
        .then(data => setResults(data));
  }, []);

  return (
    //results

    <ul>
      {results.map(result => <li>{result.name}</li>)}
    </ul>
  );
};

export default CharacterList
