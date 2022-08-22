import { combineReducers } from "redux";
import accountReducer from "./account"

export default combineReducers({
    account: accountReducer
});
