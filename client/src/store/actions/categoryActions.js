import * as actionTypes from "./categoryActionTypes";
import axios from "axios";

export const load = () => {
    return {
        type: actionTypes.LOAD
    }
}

export const getItem = (item) => {
    return dispatch => {
        dispatch(load());
        axios.get('/api/' + item)
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