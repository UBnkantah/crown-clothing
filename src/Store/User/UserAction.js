import { USER_ACTION_TYPES } from "./UserTypes"
import { CreateAction } from "../../utils/reducer/Reducer.utils"

export const setCurrentUser = (user) => 
CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
