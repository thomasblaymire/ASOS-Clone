import React from 'react';

import masterLogo from '../../assets/images/homepage/store.svg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <button className={classes.LogoButton} onClick={props.logoClickHandler}>
            {/* <img src={masterLogo} alt="Store Logo" /> */}LOGO
        </button>
    </div>
)

export default logo;

// image will be loaded by webpack during prod build
