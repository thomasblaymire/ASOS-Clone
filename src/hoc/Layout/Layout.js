import React, { Component } from "react";
import classes from "./Layout.css";

import Categories from "../../components/Categories/Categories";
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Utility from '../Utility';

class Layout extends Component {

  render() {
    return (
      <Utility>
        <div className={classes.Container}>
          <Toolbar />
          <Categories />
          <main className={classes.Content}>{this.props.children}</main>
        </div>
      </Utility>
    );
  }
}


export default Layout;
