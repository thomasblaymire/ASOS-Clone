import React from 'react';

import masterLogo from '../../assets/images/icons/asos-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <button className={classes.LogoButton} onClick={props.logoClickHandler}>
            <img src={masterLogo} alt="Store Logo" />
        </button>
    </div>
)

export default logo;

// image will be loaded by webpack during prod build
