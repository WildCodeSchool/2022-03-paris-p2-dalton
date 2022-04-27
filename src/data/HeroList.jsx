import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/hero/Hero";

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);

  const url = "http://localhost:8000/api/heroes";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setHeroes(data));
  }, []);

  return (
    <div className="container_heroes">
      {heroes &&
        heroes.map((hero) => (
          <div key={hero.id}>
            <Hero hero={hero} />
          </div>
        ))}
    </div>
  );
};

export default HeroList;
