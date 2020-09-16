import React, { Component } from "react";

import Shell from "../../hoc/Shell";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  changeIngredienthandler = (type, action) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0 && action === "r") {
      return;
    }
    const updatedCount = action === "r" ? oldCount - 1 : oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceToChange = INGREDIENT_PRICES[type];
    const previousPrice = this.state.totalPrice;
    const newPrice =
      action === "r"
        ? previousPrice - priceToChange
        : previousPrice + priceToChange;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  render() {
    const isDisabledInfo = { ...this.state.ingredients };
    for (let key in isDisabledInfo) {
      isDisabledInfo[key] = isDisabledInfo[key] <= 0;
    }
    return (
      <Shell>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          changeIngredient={this.changeIngredienthandler}
          isDisabled={isDisabledInfo}
          price={this.state.totalPrice}
        />
      </Shell>
    );
  }
}

export default BurgerBuilder;
