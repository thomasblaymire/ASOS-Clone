import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {

    return (
      <ul className={classes.NavigationItems}>
          <NavigationItem link="/about">MEN</NavigationItem>
          <NavigationItem link="/articles">WOMEN</NavigationItem>
          <a className={classes.NavigationItemsLink} link="/" onClick={props.clicked}>Sign Up</a>

          { !props.isAuthenticated
            ?  <a className={classes.NavigationItemsLink} link="/" onClick={props.clicked}>Login</a>
            : <NavigationItem link="/dashboard">Profile</NavigationItem> }
      </ul>
    );

};

export default navigationItems;
