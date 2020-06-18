import * as actionTypes from "../actions/categoryActionTypes";
const initState = {
    shoes: null,
    loading: false
}

const reducer = (state = initState, actions) => {
    switch (actions.type) {
        case actionTypes.LOAD:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_ITEM:
            return {
                ...state,
                shoes: actions.data,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer