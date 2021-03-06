import  { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import homeReducer from '../containers/home/reducer'
import loginReducer from '../containers/login/reducer'
import seekingLoanReducer from '../containers/seekingLoan/reducer'
import modalReducer from '../containers/modals/reducer'
import navReducer from '../containers/NavBar/reducer'
import registerReducer from '../containers/register/reducer'
import authReducer from '../services/fireAuth/reducer'


const combinedReducers = combineReducers({
    user: authReducer,
    navbar: navReducer,
    modals: modalReducer,
    login: loginReducer,
    signup: registerReducer,
    home: homeReducer,
    seekingLoan: seekingLoanReducer,
    routing: routerReducer
})

export default combinedReducers

