import * as actionTypes from '../actions/actionTypes';



const productReducerDefaultState = [];
// Reducer to take products from the relvant action and to update state with new values.
const reducer = (state = productReducerDefaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
        return {
            ...state,
            loading: true,
        };
        case actionTypes.GET_PRODUCTS_SUCCESS:
        return [
            ...state,
            action.products
        ]
        case actionTypes.GET_PRODUCTS_FAIL:
        return {
            ...state,
            error: true
        };
        case actionTypes.FILTER_PRODUCTS:
        return {
            
        }
        default:
            return state;
    }
}

export default reducer;