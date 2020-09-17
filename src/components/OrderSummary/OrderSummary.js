import React from "react";

const OrderSummary = (props) => {
  const ingredientList = Object.keys(props.ingredients).map((i) => {
    return (
      <li key={i}>
        <span style={{ textTransform: "capitalize" }}>{i}</span>:{" "}
        {props.ingredients[i]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Oder</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientList}</ul>
      <p>Does everything look good to you?</p>
    </>
  );
};

export default OrderSummary;
