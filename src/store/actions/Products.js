import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getProducts = () => {
    return {
        type: actionTypes.GET_PRODUCTS
    };
};

export const getProductsSuccess = ( products ) => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        products: products
    };
};

export const getProductsFail = () => {
    return {
        type: actionTypes.GET_PRODUCTS_FAIL
    }
};

export const filterProducts = (searchTerm) => {
    return {
        type: actionTypes.FILTER_PRODUCTS,
        searchTerm
    }
}

export const fetchProducts = () => {
    return dispatch => {
        axios.get('http://www.mocky.io/v2/5abb62552d000047009bdc0f')
            .then( response => {
                const fetchedProducts = response.data;
                dispatch(getProductsSuccess(fetchedProducts));
            } )
            .catch( error => {
                dispatch(getProductsFail(error));
            } );
    };
};