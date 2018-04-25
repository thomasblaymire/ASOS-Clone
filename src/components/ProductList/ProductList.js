import React, { Component } from 'react';
import ProductItem from './ProductItem/ProductItem';

class ProductList extends Component {
	productLikeSelect() {
		console.log('Like clicked');
	}

	render() {
		let products = null;

		if (this.props.products) {
			products = this.props.products.map(product => (
				<ProductItem
					key={product.id}
					id={product.id}
					liked={this.productLikeSelect}
					title={product.title}
					image={product.images}
					description={product.description}
					price={product.price}
				/>
			));
		}

		return (
			<div className="container">
				<div className="row justify-content-center">{products}</div>
			</div>
		);
	}
}

export default ProductList;
