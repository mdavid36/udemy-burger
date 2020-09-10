import React from "react";

import Shell from "../../hoc/Shell";
import classStyles from "./Layout.module.css";

const Layout = (props) => (
  <Shell>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classStyles.Content}>{props.children}</main>
  </Shell>
);

export default Layout;
