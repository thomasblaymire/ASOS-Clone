import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    loading: false,
    error: false
};


const reducer = (state = initialState, action) => {
    // Eventually to add logic to create, update and delete
    switch (action.types) {
        case actionTypes.GET_PRODUCTS:
        return {
            ...state,
            loading: true
        };
        case actionTypes.GET_PRODUCTS_SUCCESS:
        return {
            ...state,
            loading: false
        }
        case actionTypes.GET_PRODUCTS_FAIL:
        return {
            ...state,
            error: true
        };
        default:
            return state;
    }
}

export default reducer;