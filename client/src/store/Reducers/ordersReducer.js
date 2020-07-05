import * as actionTypes from "../actions/orderActionTypes";

const initState = {
    cart: [],
    showCart: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            console.log(action.data);
            return {
                ...state,
                cart: state.cart.concat(action.data)
            }
        case actionTypes.DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(p => p.data._id !== action.id)
            }
        case actionTypes.TOGGLE_CART:
            return {
                ...state,
                showCart: !state.showCart
            }
        default:
            return state
    }
}

export default reducer;