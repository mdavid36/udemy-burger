import React from "react";

import Shell from "../../hoc/Shell";

const Layout = (props) => (
  <Shell>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Shell>
);

export default Layout;
