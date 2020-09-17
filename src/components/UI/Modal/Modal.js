import React from "react";

import classStyles from "./Modal.module.css";

const Modal = (props) => {
  return <div className={classStyles.Modal}>{props.children}</div>;
};

export default Modal;
