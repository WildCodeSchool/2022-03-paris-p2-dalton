import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/hero/Hero";

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);

  const url = "https://lit-badlands-40023.herokuapp.com/heros";

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
