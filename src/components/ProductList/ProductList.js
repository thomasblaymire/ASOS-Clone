import React, { Component } from "react";

import classes from "./ProductList.css";
import InfiniteScroll from "react-infinite-scroller";
import ProductItem from "./ProductItem/ProductItem";

import spinner from '../../assets/images/icons/spinner.gif';

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
        <InfiniteScroll
          pageStart={0}
          hasMore={true || false}
          loader={ <img className={classes.ProductList__Spinner} alt="Spinner" src={spinner} key={0} /> }>
          <div className="row justify-content-center">
          {products}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default ProductList;
