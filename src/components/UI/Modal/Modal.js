import React from "react";

import classStyles from "./Modal.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Modal = (props) => (
  <>
    <Backdrop exit={props.exit} show={props.show} />
    <div
      className={classStyles.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </>
);

export default Modal;
