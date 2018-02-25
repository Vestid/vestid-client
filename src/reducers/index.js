import  { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import homeReducer from '../containers/home/reducer'
import loginReducer from '../containers/login/reducer'

const combinedReducers = combineReducers({
    home: homeReducer,
    login: loginReducer,
    routing: routerReducer
})

export default combinedReducers

