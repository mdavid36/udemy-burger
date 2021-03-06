import React, { Component } from "react";

import Shell from "../../hoc/Shell";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

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
    checkingOut: false,
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

  checkingOutHandler = () => {
    this.setState({ checkingOut: !this.state.checkingOut });
  };

  render() {
    const isDisabledInfo = { ...this.state.ingredients };
    for (let key in isDisabledInfo) {
      isDisabledInfo[key] = isDisabledInfo[key] <= 0;
    }
    return (
      <Shell>
        <Modal show={this.state.checkingOut} exit={this.checkingOutHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          changeIngredient={this.changeIngredienthandler}
          isDisabled={isDisabledInfo}
          price={this.state.totalPrice}
          checkOut={this.checkingOutHandler}
        />
      </Shell>
    );
  }
}

export default BurgerBuilder;
