import {combineReducers} from "redux"

import { userReducer } from "./User/UserReducer"

export const RootReducer = combineReducers({
    user: userReducer
})