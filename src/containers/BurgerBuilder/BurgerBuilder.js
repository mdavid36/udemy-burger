import React, { Component } from "react";

import Shell from "../../hoc/Shell";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Shell>
        <Burger />
        <div>Build Controls</div>
      </Shell>
    );
  }
}

export default BurgerBuilder;
