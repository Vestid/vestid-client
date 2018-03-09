import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reduxLoggerTransformImmutable from './reduxLoggerTransformImmutable'
import {createLogger} from 'redux-logger'
import combinedReducers from './'
import epics from '../epics'
console.log('env: ', process.env.NODE_ENV)

// EPICS MIDDLEWARE ============================
const epicMiddleware = createEpicMiddleware(epics)

//COMBINE MIDDLEWARE ============================
const middleware = [epicMiddleware]

switch(process.env.NODE_ENV) {
  case 'development': {
    middleware.push(createLogger(reduxLoggerTransformImmutable))
    break;
  }
  // set up other enviornment variables
}
// TOP LEVEL REDUX STORE ===========================
console.log('middleware: ', middleware)
export default () => {
  return createStore(
    combinedReducers,
    applyMiddleware(...middleware)
  )
}
