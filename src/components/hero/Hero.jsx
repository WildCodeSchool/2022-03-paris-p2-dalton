import React from "react";
import { Link } from "react-router-dom";
import Herostyle from "./Herostyle.css";

const Hero = ({ hero }) => {
  return (
    <div>
      <div>
        <Link className="img" to={{ pathname: `/hero/${hero.id}` }}>
          <img src={hero.image} alt={hero.name} />
        </Link>
        <div>
          <div className="border_blue"></div>
          <div className="container_hero">
            <h3>{hero.name}</h3>
            <h4>{hero.race}</h4>
            <p>{hero.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
