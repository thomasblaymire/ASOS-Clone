import React, { Component } from "react";
import ProductItem from './ProductItem/ProductItem';
import classes from "./ProductList.css";
// import Spinner from "../../UI/Spinner/Spinner";
import Utility from '../../hoc/Utility';

import axios from 'axios';

class ProductList extends Component {

  state = {
    products: [],
    loading: true,
    toggleLikeIcon: false
  };

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    axios.get('http://www.mocky.io/v2/5abb62552d000047009bdc0f')
    .then( (response) => {
      console.log(response.data);
      this.setState({ products: response.data });
    })
    .catch(err => {
      console.log(err);
    })
  }

  onLikeToggle = () => {
    console.log("On like toggle hit");
    this.setState({ toggleLike: true });
  };


  render() {
    return (
      <Utility>
        <div className={classes.ProductList}>
          {this.state.products.map(product => (
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
          ))}
        </div>
      </Utility>
    );
  }
}

export default ProductList;
