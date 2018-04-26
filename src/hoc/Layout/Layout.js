import React, { Component } from 'react';
import classes from './Layout.css';

import Categories from '../../components/Categories/Categories';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Modal from './../../components/UI/Modal/Modal';

import Utility from '../Utility';

class Layout extends Component {
	state = {
		openModal: false,
	};

	auth = () => {
		this.setState(prevState => {
			return { openModal: true };
		});
	};

	authClosed = () => {
		this.setState({ openModal: false });
	};

	render() {
		return (
			<Utility>
				<div className={classes.Container}>
					<Toolbar auth={this.auth} />
					<Categories />
					<Modal show={this.state.openModal} modalClosed={this.loginToggleClosedHandler} />
					<main>{this.props.children}</main>
				</div>
			</Utility>
		);
	}
}

export default Layout;
