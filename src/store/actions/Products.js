import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getProducts = () => {
    return {
        type: actionTypes.GET_PRODUCTS
    };
};

export const getProductsSuccess = () => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS
    };
};

export const getProductsFail = () => {
    return {
        type: actionTypes.GET_PRODUCTS_FAIL
    }
};

export const fetchProducts = () => {
    return dispatch => {
        dispatch(getProducts());
        axios.get('http://www.mocky.io/v2/5abb62552d000047009bdc0f')
            .then( response => {
                console.log(response);
                dispatch(getProductsSuccess(response.data));
            } )
            .catch( error => {
                dispatch(getProductsFail(error));
            } );
    };
};