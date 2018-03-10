import  { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import homeReducer from '../containers/home/reducer'
import loginReducer from '../containers/login/reducer'
import seekingLoanReducer from '../containers/seekingLoan/reducer'
import modalReducer from '../containers/modals/reducer'
import navReducer from '../containers/NavBar/reducer'

const combinedReducers = combineReducers({
    navbar: navReducer,
    modals: modalReducer,
    login: loginReducer,
    home: homeReducer,
    seekingLoan: seekingLoanReducer,
    routing: routerReducer
})

export default combinedReducers

