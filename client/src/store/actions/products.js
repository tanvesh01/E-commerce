import * as actionTypes from "./productActionTypes";
import axios from "axios";

export const load = () => {
    return {
        type: actionTypes.LOAD
    }
}

export const setBrand = (brand) => {
    return {
        type: actionTypes.SET_BRAND,
        brand: brand
    }
}

export const setPrices = (min, max) => {
    return {
        type: actionTypes.SET_PRICE,
        max: max,
        min: min
    }
}

export const setSelect = (id) => {
    return {
        type: actionTypes.SET_SELECTED,
        id: id
    }
}

export const getItem = (item) => {
    return dispatch => {
        dispatch(load());
        axios.get('/api/Product/' + item)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: actionTypes.GET_ITEM,
                    data: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}