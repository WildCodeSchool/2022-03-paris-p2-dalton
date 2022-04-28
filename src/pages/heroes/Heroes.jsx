import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Heroes.css";

export default function () {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/heroes/`)
      .then((res) => res.data)
      .then((data) => setSearchResults(data));
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
