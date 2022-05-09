import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [randomImage, setRandomImage] = useState([]);

  useEffect(() => {
    let randomHeroes = 1 + Math.floor(Math.random() * 20);

    axios
      .get(`http://localhost:8000/api/heroes/`)
      .then((res) => res.data[randomHeroes])
      .then((data) => setRandomImage(data));
  }, []);

  return (
    <div>
      <img src={randomImage.picture} alt="img-banner" />
    </div>
  );
};
