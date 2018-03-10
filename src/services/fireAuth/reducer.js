import {fromJS} from 'immutable'
import actionTypes from './actions/actionTypes'

const initialState = fromJS({
	authed: false,
	firstName: null,
	lastName: null,
	emailVerified: false,
	uuid: null
})

export default (state = initialState, {type = null, payload = null}) => {
	//switch(type) {
	//
	//}
	return state
}