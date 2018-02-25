import actionTypes from './actions/actionTypes'

const initialState = {
    authed: false
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.HOME_CHECK_AUTH: {
            return Object.assign({}, state, {authed: true})
        }
        default: {
            return state;
        }
    }
}