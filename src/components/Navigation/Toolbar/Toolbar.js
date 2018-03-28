import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';
import Search from '../../Search/Search';


const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>

            <div className={classes.Toolbar__Logo}>
                <Logo logoClickHandler={props.logoClickHandler} />
            </div>

            <div className={classes.Toolbar__Search}>
                <Search />
            </div>

            <div className={classes.Toolbar__Navigation}>
                <NavigationItems />
            </div>

            {/* <nav className={classes.DesktopOnly}>
                <NavigationItems
                    clicked={props.openLogin}
                    isAuthenticated={props.isAuth} />
            </nav>  */}
        </header>
    )
};

export default toolbar;