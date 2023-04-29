import {compose, creaseStore, applyMiddleware} from "redux"
import { Rootreducer} from "/Store"
import logger from "redux-logger"

//root-reducer

const middlewares = [logger]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = creaseStore(Rootreducer, undefined, composedEnhancers)


