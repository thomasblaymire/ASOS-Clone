import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import userIcon from '../../../assets/images/icons/SVG/user.svg';
import cartIcon from '../../../assets/images/icons/SVG/cart.svg';

const navigationItems = props => {
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem link="/about">
				<img className={classes.NavigationItems__Image} src={userIcon} alt="User Icon" />
			</NavigationItem>
			<NavigationItem link="/about">
				<img className={classes.NavigationItems__Image} src={cartIcon} alt="User Icon" />
			</NavigationItem>
		</ul>
	);
};

export default navigationItems;
