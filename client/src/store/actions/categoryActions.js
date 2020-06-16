import * as actionTypes from "./categoryActionTypes";
import axios from "axios";

export const load = () => {
    return {
        type: actionTypes.LOAD
    }
}

export const getShoes = () => {
    return dispatch => {
        dispatch(load());
        axios.get('/api/shoes')
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: actionTypes.GET_SHOES,
                    data: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}