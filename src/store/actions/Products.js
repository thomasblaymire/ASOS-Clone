import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getProducts = () => {
    return {
        type: actionTypes.GET_PRODUCTS
    };
}