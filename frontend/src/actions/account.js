import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    RESET_REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    START_LOADING,
    STOP_LOADING,
} from "./types";

import { toast } from "react-toastify";

export const load_user = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const res = await fetch("/api/account/user/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },

        });
        
        const data = await res.json();
        
        if (res.ok) {
            dispatch({ type: LOAD_USER_SUCCESS, payload: data });
        } else {
            dispatch({ type: LOAD_USER_FAIL });
        }

    } catch (error) {
        dispatch({ type: STOP_LOADING });
    }
};

export const register =
    ({username, first_name, last_name, email, password1, password2 }) =>
        async (dispatch) => {
            dispatch({ type: START_LOADING });

            try {
                const response = await fetch(`/api/account/register`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        first_name,
                        last_name,
                        email,
                        password1,
                        password2,
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    toast.success("Registration successful");

                    dispatch({ type: REGISTER_SUCCESS});
                } else {
                    toast.error(data.error);
                    console.log(data.errors);

                    dispatch({ type: REGISTER_FAIL });
                }

                dispatch({ type: STOP_LOADING });

            } catch (error) {
                dispatch({ type: REGISTER_FAIL });

                dispatch({ type: STOP_LOADING });
            }
};

export const reset_register_success = () => (dispatch) => {
    dispatch({ type: RESET_REGISTER_SUCCESS });
}

export const login = ({ username, password }) => async (dispatch) => {
    dispatch({ type: START_LOADING });

    try {
        const response = await fetch(`/api/account/login`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success(data.success);

            dispatch({ type: LOGIN_SUCCESS });
            dispatch(load_user());
        } else {
            toast.error(data.error);
            dispatch({ type: LOGIN_FAIL });
        }

        dispatch({ type: STOP_LOADING });

    } catch (error) {
        dispatch({ type: LOGIN_FAIL });

        dispatch({ type: STOP_LOADING });
    }
}

export const logout = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/account/logout`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
        });

        if (response.ok) {
            dispatch({ type: LOGOUT_SUCCESS });
        } else {
            dispatch({ type: LOGOUT_FAIL });
        }

    } catch (error) {
        dispatch({ type: LOGOUT_FAIL });
    }
}

