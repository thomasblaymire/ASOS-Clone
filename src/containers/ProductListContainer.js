import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import Utility from "./../hoc/Utility";
import ProductList from "./../components/ProductList/ProductList";

class ProductListContainer extends Component {
  state = {
    products: [],
    error: null
  };

  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    return <ProductList products={this.props.products} />;
  }
}

const mapStateToProps = state => {
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
