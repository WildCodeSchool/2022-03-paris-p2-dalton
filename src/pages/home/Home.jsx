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
  // let randomHeroes = [
  //   {
  //     id: 1,
  //     name: "Ant-Man",
  //     picture: "https://zupimages.net/up/20/46/9sjo.png",
  //     speed: 23,
  //     strength: 42,
  //     stamina: 81,
  //     gender: "Male",
  //     race: "Human",
  //     price: 25,
  //   },
  //   {
  //     id: 2,
  //     name: "Batgirl",
  //     picture: "https://zupimages.net/up/20/45/1foq.png",
  //     speed: 33,
  //     strength: 85,
  //     stamina: 40,
  //     gender: "Female",
  //     race: "Human",
  //     price: 32,
  //   },
  //   {
  //     id: 3,
  //     name: "Batman",
  //     picture: "https://zupimages.net/up/20/45/q0kq.png",
  //     speed: 29,
  //     strength: 83,
  //     stamina: 63,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 5,
  //     name: "Black Widow",
  //     picture: "https://zupimages.net/up/20/46/twkj.png",
  //     speed: 33,
  //     strength: 13,
  //     stamina: 86,
  //     gender: "Female",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 6,
  //     name: "Black Panther",
  //     picture: "https://zupimages.net/up/20/45/eg1f.png",
  //     speed: 30,
  //     strength: 51,
  //     stamina: 81,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 7,
  //     name: "Bumblebee",
  //     picture: "https://zupimages.net/up/20/46/30w7.png",
  //     speed: 55,
  //     strength: 99,
  //     stamina: 75,
  //     gender: "Male",
  //     race: "Robot",
  //     price: 0,
  //   },
  //   {
  //     id: 8,
  //     name: "Captain America",
  //     picture: "https://zupimages.net/up/20/47/t70s.png",
  //     speed: 38,
  //     strength: 86,
  //     stamina: 55,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 9,
  //     name: "Catwoman",
  //     picture: "https://zupimages.net/up/20/45/ku3m.png",
  //     speed: 33,
  //     strength: 45,
  //     stamina: 87,
  //     gender: "Female",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 10,
  //     name: "Chuck Norris",
  //     picture: "https://zupimages.net/up/20/46/q5g9.png",
  //     speed: 47,
  //     strength: 100,
  //     stamina: 80,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 11,
  //     name: "Daredevil",
  //     picture: "https://zupimages.net/up/20/45/35em.png",
  //     speed: 82,
  //     strength: 61,
  //     stamina: 35,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 12,
  //     name: "Deadpool",
  //     picture: "https://zupimages.net/up/20/47/ie06.png",
  //     speed: 50,
  //     strength: 32,
  //     stamina: 100,
  //     gender: "Male",
  //     race: "Mutant",
  //     price: 0,
  //   },
  //   {
  //     id: 13,
  //     name: "Elastigirl",
  //     picture: "https://zupimages.net/up/20/46/lpdr.png",
  //     speed: 86,
  //     strength: 32,
  //     stamina: 80,
  //     gender: "Female",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 14,
  //     name: "Flash",
  //     picture: "https://zupimages.net/up/20/47/e77d.jpg",
  //     speed: 100,
  //     strength: 50,
  //     stamina: 23,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 15,
  //     name: "Harley Quinn",
  //     picture: "https://zupimages.net/up/20/47/117o.png",
  //     speed: 33,
  //     strength: 12,
  //     stamina: 90,
  //     gender: "Female",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 16,
  //     name: "Hellboy",
  //     picture: "https://zupimages.net/up/20/45/nv9p.png",
  //     speed: 21,
  //     strength: 86,
  //     stamina: 75,
  //     gender: "Male",
  //     race: "Deamon",
  //     price: 0,
  //   },
  //   {
  //     id: 17,
  //     name: "Hulk",
  //     picture: "https://zupimages.net/up/20/46/pl78.png",
  //     speed: 63,
  //     strength: 99,
  //     stamina: 75,
  //     gender: "Male",
  //     race: "Radiation",
  //     price: 0,
  //   },
  //   {
  //     id: 18,
  //     name: "Iron Man",
  //     picture: "https://zupimages.net/up/20/45/o7ov.png",
  //     speed: 58,
  //     strength: 100,
  //     stamina: 76,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 19,
  //     name: "Joker",
  //     picture: "https://zupimages.net/up/20/46/89gj.png",
  //     speed: 10,
  //     strength: 12,
  //     stamina: 82,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 20,
  //     name: "Judge Dredd",
  //     picture: "https://zupimages.net/up/20/46/kxev.png",
  //     speed: 50,
  //     strength: 87,
  //     stamina: 80,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 21,
  //     name: "Kick-Ass",
  //     picture: "https://www.zupimages.net/up/20/44/t1qm.png",
  //     speed: 25,
  //     strength: 30,
  //     stamina: 84,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 22,
  //     name: "Legolas",
  //     picture: "https://zupimages.net/up/20/46/m359.png",
  //     speed: 45,
  //     strength: 22,
  //     stamina: 90,
  //     gender: "Male",
  //     race: "Elfe",
  //     price: 0,
  //   },
  //   {
  //     id: 23,
  //     name: "Mystique",
  //     picture: "https://zupimages.net/up/20/46/1cm3.png",
  //     speed: 23,
  //     strength: 12,
  //     stamina: 81,
  //     gender: "Male",
  //     race: "Mutant",
  //     price: 0,
  //   },
  //   {
  //     id: 24,
  //     name: "Spider-Man",
  //     picture: "https://zupimages.net/up/20/45/v9zn.png",
  //     speed: 86,
  //     strength: 55,
  //     stamina: 85,
  //     gender: "Male",
  //     race: "Arachnid",
  //     price: 0,
  //   },
  //   {
  //     id: 25,
  //     name: "Superman",
  //     picture: "https://zupimages.net/up/20/45/u5ff.png",
  //     speed: 100,
  //     strength: 75,
  //     stamina: 40,
  //     gender: "Male",
  //     race: "Kryptonian",
  //     price: 0,
  //   },
  //   {
  //     id: 26,
  //     name: "Super Steph",
  //     picture: "https://zupimages.net/up/22/16/frfy.jpeg",
  //     speed: 99,
  //     strength: 70,
  //     stamina: 80,
  //     gender: "Female",
  //     race: "Javascript",
  //     price: 0,
  //   },
  //   {
  //     id: 27,
  //     name: "Thor",
  //     picture: "https://zupimages.net/up/20/46/banj.png",
  //     speed: 65,
  //     strength: 90,
  //     stamina: 76,
  //     gender: "Male",
  //     race: "Asgardian",
  //     price: 0,
  //   },
  //   {
  //     id: 28,
  //     name: "War Machine",
  //     picture: "https://zupimages.net/up/20/46/ikor.png",
  //     speed: 78,
  //     strength: 76,
  //     stamina: 100,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 29,
  //     name: "Wolverine",
  //     picture: "https://zupimages.net/up/20/45/not6.png",
  //     speed: 51,
  //     strength: 40,
  //     stamina: 100,
  //     gender: "Male",
  //     race: "Mutant",
  //     price: 0,
  //   },
  //   {
  //     id: 30,
  //     name: "Wonder Woman",
  //     picture: "https://zupimages.net/up/20/45/nu42.png",
  //     speed: 86,
  //     strength: 76,
  //     stamina: 80,
  //     gender: "Female",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 31,
  //     name: "Super Marie",
  //     picture: "https://zupimages.net/up/22/17/sl3d.jpg",
  //     speed: 56,
  //     strength: 52,
  //     stamina: 81,
  //     gender: "Female",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 32,
  //     name: "Super Vaish",
  //     picture: "https://zupimages.net/up/22/17/qux7.jpeg",
  //     speed: 88,
  //     strength: 34,
  //     stamina: 78,
  //     gender: "Female",
  //     race: "Human",
  //     price: 0,
  //   },
  //   {
  //     id: 33,
  //     name: "Super Eric",
  //     picture: "https://zupimages.net/up/22/17/rsps.jpg",
  //     speed: 45,
  //     strength: 66,
  //     stamina: 78,
  //     gender: "Male",
  //     race: "Human",
  //     price: 0,
  //   },
  // ];

  return (
    <div>
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

      {/* <h1>love.war.shop</h1>
      <button className="button-home">
        <p className="p-button">discover thoses heroes</p>
      </button> */}
    </div>
  );
};

export default Home;
