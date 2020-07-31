import * as actionTypes from "../actions/productActionTypes";
const initState = {
    items: null,
    loading: false,
    brand: null,
    maxPrice: 2000,
    minPrice: 0,
    selected: "shoe",
};

const reducer = (state = initState, actions) => {
    switch (actions.type) {
        // case actionTypes.LOAD:
        //     return {
        //         ...state,
        //         //loading: true,
        //     };
        case actionTypes.GET_ITEM:
            return {
                ...state,
                items: actions.data,
                loading: false,
                brand: null,
            };
        case actionTypes.SET_BRAND:
            return {
                ...state,
                brand: actions.brand,
            };
        case actionTypes.SET_PRICE:
            return {
                ...state,
                minPrice: actions.min,
                maxPrice: actions.max,
            };
        case actionTypes.SET_SELECTED:
            return {
                ...state,
                selected: actions.id,
            };
        default:
            return state;
    }
};

export default reducer;
