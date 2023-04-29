import {combineReducers} from "redux"

import { userReducer } from "./User/UserReducer"
import { categoriesReducer } from "./Categories/CategoriesReducer"

export const Rootreducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer
})