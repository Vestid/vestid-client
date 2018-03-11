import actionTypes from './actions/actionTypes'
//TODO: convert this to immutable!

const initialState = {
    email: null,
    password: null,
    authenticated: false,
    error: null
  }

export default (state = initialState, {type, payload = null}) => {
    switch (type){
        case actionTypes.UPDATE_EMAIL_INPUT: {
            return Object.assign({}, state, {email: payload})
        }
        case actionTypes.UPDATE_PASSWORD_INPUT: {
            return Object.assign({}, state, {password: payload})
        }
        case actionTypes.UPDATE_USER_AUTHENTICATION: {
            return Object.assign({}, state, {authenticated: payload})
        }
      case actionTypes.UPDATE_LOGIN_ERROR: {

      }
        default: {
            return state
        }
    }
}
