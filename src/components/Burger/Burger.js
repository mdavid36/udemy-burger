import React from "react";

import classStyles from "./BurgerIngredient/Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  return (
    <div className={classStyles.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="lettuce" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
