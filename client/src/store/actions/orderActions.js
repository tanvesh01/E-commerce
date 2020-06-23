import * as actionTypes from "./orderActionTypes";

export const addToCart = (name) => {
    return {
        type: actionTypes.ADD_TO_CART,
        data: {
            name: name
        }
    }
}

export const deleteFromCart = (id) => {
    return {
        type: actionTypes.DELETE_FROM_CART,
        id: id
    }
}