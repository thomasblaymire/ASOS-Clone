import React, { Component } from "react";
import classes from "./Layout.css";

import Categories from "../../components/Categories/Categories";
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Utility from "../Utility/Utility";

class Layout extends Component {

  render() {
    return (
      <Utility>
        <Toolbar />
        <Categories />
fsfsfsfs
        <main className={classes.Content}>{this.props.children}</main>
      </Utility>
    );
  }
}


export default Layout;
