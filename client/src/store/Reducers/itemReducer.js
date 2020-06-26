import * as actionTypes from "../actions/actionTypes";

const initState = {
    items: [],
    loading: false,
    selected: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ITEMS:
            return {
                ...state,
                items: action.data,
                loading: false
            }
        case actionTypes.ITEM_DELETE:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action._id)
            };
        case actionTypes.ADD:
            return {
                ...state,
                items:
                    [...state.items, action.item]
            }
        case actionTypes.ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default reducer;