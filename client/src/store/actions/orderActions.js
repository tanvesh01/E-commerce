import * as actionTypes from "./orderActionTypes";

export const addToCart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        data: {
            data: data
        }
    }
}

export const deleteFromCart = (id) => {
    console.log(id);
    return {
        type: actionTypes.DELETE_FROM_CART,
        id: id
    }
}