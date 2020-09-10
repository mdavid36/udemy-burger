import React, { Component } from "react";

import Shell from "../../hoc/Shell";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Shell>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Shell>
    );
  }
}

export default BurgerBuilder;
