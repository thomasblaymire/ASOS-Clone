import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

// import userIcon from '../../../assets/images/icons/SVG/user.svg';
// import basketIcon from '../../../assets/images/icons/SVG/basket.svg';

const navigationItems = (props) => {

    return (
      <ul className={classes.NavigationItems}>
          <NavigationItem link="/about">
          {/* <img src={bagIcon} alt='User Icon' />  */}
          </NavigationItem>
          <NavigationItem link="/about">
            {/* <img src={bagIcon} alt='User Icon' />  */}
          </NavigationItem>
          <NavigationItem link="/about">
            {/* <img src={basketIcon} alt='User Icon' />  */}
          </NavigationItem>

          {/* <a className={classes.NavigationItemsLink} link="/" onClick={props.clicked}>Sign Up</a>

          { !props.isAuthenticated
            ?  <a className={classes.NavigationItemsLink} link="/" onClick={props.clicked}>Login</a>
            : <NavigationItem link="/dashboard">Profile</NavigationItem> } */}
      </ul>
    );

};

export default navigationItems;
