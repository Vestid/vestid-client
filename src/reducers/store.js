import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
//import {routerMiddleware} from 'react-router-redux';
import combinedReducers from './'
import epics from '../epics'

// EPICS MIDDLEWARE ============================
const epicMiddleware = createEpicMiddleware(epics)
// COMBINE MIDDLEWARE ===========================
export default () => {
  return createStore(
    combinedReducers,
    applyMiddleware(epicMiddleware)
  )
}
