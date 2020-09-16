import React from "react";

import classStyles from "./BuildControl.module.css";

const BuildControl = (props) => (
  <div className={classStyles.BuildControl}>
    <div className={classStyles.Label}>{props.label}</div>
    <button
      className={classStyles.Less}
      onClick={props.remove}
      disabled={props.disabled}
    >
      Subtract
    </button>
    <button className={classStyles.More} onClick={props.add}>
      Add
    </button>
  </div>
);

export default BuildControl;
