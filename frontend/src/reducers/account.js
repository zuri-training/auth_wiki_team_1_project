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
} from '../actions/types';

const initialState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    register_success: false
}

const accountReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                register_success: true
            };
        case REGISTER_FAIL:
            return {
                ...state,
            };
        case RESET_REGISTER_SUCCESS:
            return {
                ...state,
                register_success: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        case LOGOUT_FAIL:
            return {
                ...state,
            };
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: payload.user
            };
        case LOAD_USER_FAIL:
            return {
                ...state,
                user: null
            };
        case START_LOADING:
            return {
                ...state,
                loading: true
            };
        case STOP_LOADING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    };
}

export default accountReducer;
