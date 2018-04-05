import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import Utility from "./../hoc/Utility";
import ProductItem from "./../components/ProductList/ProductItem/ProductItem";

class ProductListContainer extends Component {
  state = {
    products: [],
    loading: true,
    toggleLikeIcon: false
  };

  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    let products = null;
    if (this.props.products) {
      products = this.props.products.map(product => (
        <ProductItem
          toggleLikeIcon={this.state.toggleLikeIcon}
          onLikeToggle={this.onLikeToggle}
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
      <section>
        <Utility>
          <div>{products}</div>
        </Utility>
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.products[0]);
  return {
    products: state.products[0],
    error: state.products.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductListContainer
);
