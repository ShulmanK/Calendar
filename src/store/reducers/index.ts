import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer";

const rootReducer: any = combineReducers({
    user: userReducer
});

export default rootReducer;