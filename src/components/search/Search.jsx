import React from "react";
import Searchstyle from "./Searchstyle.css";
import { Link } from "react-router-dom";

export const Search = (props) => {
  const { searchValue, setSearchValue } = props;

  return (
    <div className="container-input">
      <h2>heroes list</h2>
      <p>You can search and filter your favorite heroes</p>

      <input
        value={searchValue}
        type="text"
        placeholder="icon SEARCH"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
