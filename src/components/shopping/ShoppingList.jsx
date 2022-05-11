import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Shopping from "./Shopping";
import Categories from "./Categories";
import "./styles/ShoppingList.css";

const ShoppingList = ({ cart, updateCart }) => {
  const [shoppings, setShoppings] = useState([]);

  const url = "http://localhost:8000/api/heroes";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setShoppings(data));
  }, []);

  const [activeCategory, setActiveCategory] = useState("");
  const categories = shoppings.reduce(
    (acc, shopping) =>
      acc.includes(shopping.race) ? acc : acc.concat(shopping.race),
    []
  );

  function addToCart(name, price) {
    const currentCardSaved = cart.find((card) => card.name === "name");
    if (currentCardSaved) {
      const cartFilteredCurrentCard = cart.filter(
        (card) => card.name !== "name"
      );
      updateCart([
        ...cartFilteredCurrentCard,
        { name, price, amount: currentCardSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="whs-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <div className="whs-flex-wrap-desktop">
        <ul className="whs-shopping-list">
          {shoppings &&
            shoppings
              .filter((shopping) => {
                return shopping.id !== 4 && shopping.id !== 10;
              })
              .map((shopping) =>
                !activeCategory || activeCategory === shopping.race ? (
                  <div key={shopping.id}>
                    <Shopping
                      shopping={shopping}
                      name={shopping.name}
                      picture={shopping.picture}
                      price={shopping.price}
                    />
                    <div className="button-container">
                      <button
                        className="button-add"
                        onClick={() => addToCart(shopping.name, shopping.price)}
                      >
                        Add to bag
                      </button>
                    </div>
                  </div>
                ) : null
              )}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
