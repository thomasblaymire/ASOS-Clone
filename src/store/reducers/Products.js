import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    loading: false,
    error: false
};


// Reducer to take products from the relvant action and to update state with new values.
const reducer = (state = initialState, action) => {

    console.log(state);

    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
        return {
            ...state,
            loading: true,
        };
        case actionTypes.GET_PRODUCTS_SUCCESS:
        console.log('GET_PRODUCTS_SUCCESS AT HIT');
        console.log(state);
        return {
            ...state,
            loading: false,
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