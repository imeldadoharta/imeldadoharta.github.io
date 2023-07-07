import { combineReducers } from "redux";

import UserReducers from "./userReducer";
import ProductReducers from "./productReducer"

const rootReducers = combineReducers({
    userStated : UserReducers,
    prodStated:ProductReducers
})

export default rootReducers