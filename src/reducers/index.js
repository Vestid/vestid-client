import  { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import homeReducer from '../containers/home/reducer'
import loginReducer from '../containers/login/reducer'
import seekingLoanReducer from '../containers/seekingLoan/reducer'

const combinedReducers = combineReducers({
    login: loginReducer,
    home: homeReducer,
    seekingLoan: seekingLoanReducer,
    routing: routerReducer
})

export default combinedReducers

