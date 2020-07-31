import * as actionTypes from "./actionTypes";
import { returnErrors } from "./errorActions";
import axios from "axios";

export const toggleAuthModal = () => {
    return {
        type: actionTypes.TOGGLE_AUTH_MODAL,
    };
};

//* Check token and load user

export const loadUser = () => (dispatch, getState) => {
    //* User loading
    dispatch({
        type: actionTypes.USER_LOADING,
    });

    axios
        .get("/api/auth/user", tokenConfig(getState))
        .then((res) =>
            dispatch({
                type: actionTypes.USER_LOADED,
                payload: res.data,
            })
        )
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: actionTypes.AUTH_ERROR,
            });
        });
};

export const register = ({ name, email, password }) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    // Request body
    const body = JSON.stringify({
        name,
        email,
        password,
    });
    axios
        .post("/api/users/", body, config)
        .then((res) =>
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                payload: res.data,
            })
        )
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
            dispatch({
                type: actionTypes.REGISTER_FAIL,
            });
        });
};

export const login = ({ email, password }, history) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    // Request body
    const body = JSON.stringify({
        email,
        password,
    });
    axios
        .post("/api/auth", body, config)
        .then((res) => {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
            dispatch({
                type: actionTypes.LOGIN_FAIL,
            });
        });
};

export const logOut = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
    };
};

//* Setup config/headers and token
export const tokenConfig = (getState) => {
    //* GET token from localstorage
    const token = getState().auth.token;
    //* headers
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };
    if (token) {
        config.headers["x-auth-token"] = token;
    }
    return config;
};

export const changeAuthMode = () => {
    return {
        type: actionTypes.CHANGE_AUTH_MODE,
    };
};
