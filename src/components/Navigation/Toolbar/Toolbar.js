import React from 'react';
import Utility from './../../../hoc/Utility';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';
import Search from '../../Search/Search';

const toolbar = props => {
	return (
		<Utility>
			<span className={classes.Toolbar__Bar} />
			<header className={classes.Toolbar}>
				<div className={classes.Toolbar__Logo}>
					<Logo logoClickHandler={props.logoClickHandler} />
				</div>

				<div className={classes.Toolbar__Search}>
					<Search />
				</div>

				<div className={classes.Toolbar__Navigation}>
					<NavigationItems auth={props.auth} />
				</div>
			</header>
		</Utility>
	);
};

export default toolbar;
