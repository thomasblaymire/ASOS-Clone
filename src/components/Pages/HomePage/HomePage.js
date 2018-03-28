import React from "react";

import classes from "./Homepage.css";
import Toolbar from './../../Navigation/Toolbar/Toolbar';
import Hero from './../../Hero/Hero';

const Homepage = props => {
  return (
    <section className={classes.Container}>
      <Toolbar />
      <Hero />

      
      {/* <ProductList /> */}

    </section>
  );
};

export default Homepage;