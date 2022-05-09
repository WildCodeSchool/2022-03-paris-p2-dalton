import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [randomImage1, setRandomImage1] = useState([]);
  const [randomImage2, setRandomImage2] = useState([]);
  const [randomImage3, setRandomImage3] = useState([]);
  const [randomImage4, setRandomImage4] = useState([]);

  useEffect(() => {
    let randomHeroes = 0 + Math.floor(Math.random() * 4);

    axios
      .get(`http://localhost:8000/api/heroes/`)
      .then((res) => res.data[randomHeroes])
      .then((data) => setRandomImage1(data));
  }, []);

  useEffect(() => {
    let randomHeroes = 4 + Math.floor(Math.random() * 7);

    axios
      .get(`http://localhost:8000/api/heroes/`)
      .then((res) => res.data[randomHeroes])
      .then((data) => setRandomImage2(data));
  }, []);

  useEffect(() => {
    let randomHeroes = 7 + Math.floor(Math.random() * 10);

    axios
      .get(`http://localhost:8000/api/heroes/`)
      .then((res) => res.data[randomHeroes])
      .then((data) => setRandomImage3(data));
  }, []);

  useEffect(() => {
    let randomHeroes = 10 + Math.floor(Math.random() * 13);

    axios
      .get(`http://localhost:8000/api/heroes/`)
      .then((res) => res.data[randomHeroes])
      .then((data) => setRandomImage4(data));
  }, []);

  return (
    <div>
      <div className="container-image-mobile">
        {" "}
        <div className="container-opacity">
          {" "}
          <Link to="heroes">
            <img
              src={randomImage4.picture}
              className="img-heroes-home"
              alt=""
            />
            <h1 className="text-absolute">love.war.shop</h1>
            <button className="button-home">
              <p className="p-button">discover thoses heroes</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="container-image">
        {" "}
        <div className="container-opacity">
          <Link to="heroes">
            <h3 className="text-absolute">All heroes</h3>
            <a href="">
              <img
                src={randomImage1.picture}
                className="img-heroes-home"
                alt="all heroes"
              />{" "}
            </a>
          </Link>
        </div>
        <div className="container-opacity">
          {" "}
          <Link to="/fight">
            <h3 className="text-absolute">let's fight</h3>

            <a href="">
              {" "}
              <img
                src={randomImage2.picture}
                className="img-heroes-home"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="container-opacity">
          {" "}
          <h3 className="text-absolute">Find your match</h3>
          <Link to="Match">
            <a href="">
              {" "}
              <img
                src={randomImage3.picture}
                className="img-heroes-home"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="container-opacity">
          {" "}
          <h3 className="text-absolute">Shop it</h3>
          <Link to="shop">
            <a href="">
              {" "}
              <img
                src={randomImage4.picture}
                className="img-heroes-home"
                alt=""
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
