import React, { Component } from "react";
import PropTypes from "prop-types";

import classStyles from "./BurgerIngredient.module.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classStyles.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classStyles.BreadTop}>
            <div className={classStyles.Seeds1}></div>
            <div className={classStyles.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classStyles.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={classStyles.Cheese}></div>;
        break;
      case "lettuce":
        ingredient = <div className={classStyles.Lettuce}></div>;
        break;
      case "bacon":
        ingredient = <div className={classStyles.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
