import React from "react";

import classStyles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  const burgerPrice = props.price.toFixed(2);
  const orderDisabled = !Object.keys(props.isDisabled).some(
    (k) => !props.isDisabled[k]
  );
  return (
    <div className={classStyles.BuildControls}>
      <p>
        Current Price: <strong>${burgerPrice}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          add={() => props.changeIngredient(ctrl.type, null)}
          remove={() => props.changeIngredient(ctrl.type, "r")}
          disabled={props.isDisabled[ctrl.type]}
        />
      ))}
      <button className={classStyles.OrderButton} disabled={orderDisabled}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
