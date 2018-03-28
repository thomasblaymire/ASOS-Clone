import * as actionTypes from '../actions/actionTypes';

const initialState = {
    id: null,
    title: null,
    description: null,
    image: null,
    price: null
};

const getProducts = (state, action) => {
    return updateObject( state, {
        id: null,
        title: null,
        description: null,
        image: null,
        price: null
    });
}

const reducer = (state = initialState, action) => {
    switch (action.types) {
        case actionTypes.GET_PRODUCTS: return getProducts(state, action);
        default:
            return state;
    }
}

export default reducer;