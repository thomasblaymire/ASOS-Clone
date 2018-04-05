import React from "react";
import classes from "./Homepage.css";

import Toolbar from './../../Navigation/Toolbar/Toolbar';
import Categories from '../../Categories/Categories';
import ProductList from './../../ProductList/ProductList';

const Homepage = props => {
  return (
    <section className={classes.Container}>
      <Toolbar />
        <Categories />

      <ProductList />

    </section>
  );
};

export default Homepage;