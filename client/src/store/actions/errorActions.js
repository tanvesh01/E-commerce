import * as actionTypes from "./actionTypes"

export const returnErrors = (msg, status, id = null) => {
    return {
        type: actionTypes.GET_ERROR,
        payload: { msg, status, id }
    }
}
export const clearErrors = () => {
    return {
        type: actionTypes.CLEAR_ERROR
    }
}