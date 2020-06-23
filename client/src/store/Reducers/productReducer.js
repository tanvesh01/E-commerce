import * as actionTypes from "../actions/categoryActionTypes";
const initState = {
    items: null,
    loading: false,
    brand: null,
    maxPrice: 2000,
    minPrice: 0
}

const reducer = (state = initState, actions) => {
    switch (actions.type) {
        case actionTypes.LOAD:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_ITEM:
            return {
                ...state,
                items: actions.data,
                loading: false,
            }
        case actionTypes.SET_BRAND:
            return {
                ...state,
                brand: actions.brand
            }
        case actionTypes.SET_PRICE:
            return {
                ...state,
                minPrice: actions.min,
                maxPrice: actions.max
            }
        default:
            return state;
    }
}

export default reducer