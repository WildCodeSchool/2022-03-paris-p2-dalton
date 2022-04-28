import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Heroes.css";

export default function () {
  const [query, setQuery] = useState("");
  // ici c'est comme si on fetch/aller chercher nos superheroes
  const [searchResults, setSearchResults] = useState([]);

  function imageRandom(plop) {
    return;
  }
  // ici tu vas créer une fonction qui déclenche et stocke un randomNumber ->
  // un nombre au hasard : maths floor maths random
  // au chargement du composant

  // dans la source de ton image tu auras l'image d'un héros précis grâce au nombre aléatoire généré
  // searchResults[`$randomNumber`].picture

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/heroes/`)
      .then((res) => res.data)
      // le data du dessus est le nom structurel de l'objet data reçu en réponse à la requête
      // celui du dessous est le nommage de la variable, il vaut mieux conserver le nom data
      .then((data) => setSearchResults(data));
    // .catch((err) => {
    //   console.error(err.response.data);
    // });
    //afficher que le héro n'existe pas si l'utilisateur
    //entre un héros qui n'est pas dans l'api
  }, [query]);

  return (
    <div className="container-body">
      <div className="img-banner"></div>
      <div className="container-input">
        <h2>Heroes list</h2>
        <p>You can search and filter your favorite heroes</p>
        <input
          type="text"
          value={query}
          placeholder="SEARCH YOUR HERO"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="container-heroes">
        {searchResults
          .filter((hero) => hero.name.toLowerCase().startsWith(`${query}`))
          .map((hero) => (
            <div key={hero.id}>
              <div className="container-img">
                <Link to={{ pathname: `/hero/${hero.id}` }}>
                  <img
                    className="img-heroes"
                    src={hero.picture}
                    alt={hero.name}
                  />
                </Link>
              </div>

              <div className="border_blue"></div>
              <div className="container_hero">
                <h3>{hero.name}</h3>
                <h4>{hero.race}</h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
