import React from "react";
import HeroList from "../../data/HeroList";
import { Search } from "../../components/search/Search";
import "./Heroes.css";

export const Heroes = ({ hero }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [heroes, setHeroes] = React.useState([]);

  return (
    <div className="container-body">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {heroes
        .filter((hero) => hero.startsWith(searchValue))
        .map((hero) => (
          <p>{hero}</p>
        ))}
      <HeroList></HeroList>
    </div>
  );
};

export default Heroes;
