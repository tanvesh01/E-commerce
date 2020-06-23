import * as actionTypes from "./orderActionTypes";

export const addItem = (item) => {
    return (dispatch,) => {
        axios.post('/api/items', item)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: actionTypes.ADD,
                    item: res.data
                })
            }).catch(err => {
                console.log(err);
            })
    }
};