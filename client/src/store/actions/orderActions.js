import * as actionTypes from "./orderActionTypes";
import axios from "axios";
export const addToCart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        data: {
            data: data
        }
    }
}

export const submitOrder = (item) => {
    return (dispatch) => {
        axios.post('/api/orders', item)
            .then(res => {
                console.log(res.data);
                // dispatch({
                //     type: actionTypes.ADD,
                //     item: res.data
                // })
            }).catch(err => {
                console.log(err);
                // dispatch(returnErrors(
                //     err.response.data,
                //     err.response.status
                // ))
            })
    }
};

export const deleteFromCart = (id) => {
    console.log(id);
    return {
        type: actionTypes.DELETE_FROM_CART,
        id: id
    }
}