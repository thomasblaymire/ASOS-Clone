import React, { Component } from 'react';
import classes from './Search.css';

class Search extends Component {
	state = {
		searchTerm: '',
	};

	handleChange = event => {
		this.setState({ searchTerm: event.target.value.substr(0, 20) });
	};

	render() {
		return (
			<div>
				<form action="#" className={classes.Search}>
					<input
						onChange={this.handleChange.bind(this)}
						value={this.state.searchTerm}
						type="text"
						className={classes.Search__input}
						placeholder="Search the lastest fashion trends..."
					/>
				</form>
			</div>
		);
	}
}

export default Search;
