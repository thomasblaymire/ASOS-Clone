import React from "react";

import classes from "./Hero.css";

const Hero = props => {
  return (
    <section className={classes.Hero}>
    HERO
      <div className={classes.Hero__body}>
        <h4 className={classes.Hero__title}>{props.title}</h4>
        <p className={classes.Hero__description}>{props.description}</p>
        <button className={classes.Hero__chevron}>{props.buttonText}</button>
      </div>
    </section>
  );
};

export default Hero;