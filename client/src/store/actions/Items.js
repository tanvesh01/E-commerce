import * as actionTypes from "./actionTypes";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const addItem = (item) => {
    return (dispatch, getState) => {
        axios.post('/api/items', item, tokenConfig(getState))
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: actionTypes.ADD,
                    item: res.data
                })
            }).catch(err => {
                dispatch(returnErrors(
                    err.response.data,
                    err.response.status
                ))
            })
    }
};

export const startLoading = () => {
    return {
        type: actionTypes.ITEMS_LOADING
    }
}

export const deleteItems = (_id) => {
    return (dispatch, getState) => {
        axios.delete('/api/items/' + _id, tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: actionTypes.ITEM_DELETE,
                    _id: _id
                })
            }
            )
            .catch(err => {
                dispatch(returnErrors(
                    err.response.data,
                    err.response.status
                ))
            })
    }
}

export const getItems = () => {
    return dispatch => {
        dispatch(startLoading());
        axios.get('/api/items')
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: actionTypes.GET_ITEMS,
                    data: res.data
                })
            }).catch(err => {
                dispatch(returnErrors(
                    err.response.data,
                    err.response.status
                ))
            })
    }
}