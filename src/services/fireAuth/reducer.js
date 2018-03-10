

import {fromJS} from 'immutable'
import actionTypes from './actions/actionTypes'

const initialState = fromJS({
	authed: false,
	firstName: null,
	lastName: null,
	emailVerified: false,
	uid: null
})
export default (state = initialState, {type = null, payload = null}) => {
	switch (type) {
		case actionTypes.UPDATE_USER_AUTH_INFO: {
			console.log('payload: ', payload)
			return state.merge(payload)
		}
	}
	return state
}