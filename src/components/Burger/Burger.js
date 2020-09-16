import React from "react";

import classStyles from "./BurgerIngredient/Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let ingredientsList = Object.keys(props.ingredients)
    .map((ingKey) => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (ingredientsList.length === 0) {
    ingredientsList = <p>Please add some ingredients</p>;
  }
  return (
    <div className={classStyles.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsList}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
