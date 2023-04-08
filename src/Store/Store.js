import {compose, creaseStore, applyMiddleware} from "redux"
import { RootReducer } from './RootReducer'
import logger from "redux-logger"

//root-reducer

const middlewares = [logger]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = creaseStore(RootReducer, undefined, composedEnhancers)


