import React, { Component } from "react";

import classes from "./ProductList.css";
import Utility from "../../hoc/Utility";
import InfiniteScroll from "react-infinite-scroller";
import ProductItem from "./ProductItem/ProductItem";

import spinner from '../../assets/images/icons/spinner.gif';

class ProductList extends Component {
  render() {
    let products = null;
    if (this.props.products) {
      products = this.props.products.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
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
          loader={ <img className={classes.ProductList__Spinner} src={spinner} key={0} /> }>
          <div className="row justify-content-center">
          {products}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default ProductList;
