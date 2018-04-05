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
          {this.props.children}
        </div>
      </Utility>
    );
  }
}


export default Layout;
