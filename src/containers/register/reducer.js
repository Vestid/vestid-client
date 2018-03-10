import {fromJS} from 'immutable'
import actionTypes from './actions/actionTypes'

const initialState = fromJS({
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	passwordTwo: '',
	passwordmatch: false,
	errors: null
})

export default (state = initialState, {type = null, payload = null}) => {
	switch (type) {
		case actionTypes.UPDATE_REGISTERED_FORM: {
			console.log('payload: ', payload)
			return state.merge(payload)
		}
		//case actionTypes.UPDATE_REGISTERED_FIRST_NAME: {
		//	console.log('payload: ', payload)
		//	return state.set(['firstName'], payload)
		//}
		//case actionTypes.UPDATE_REGISTERED_LAST_NAME: {
		//	console.log('payload: ', payload)
		//	return state.set(['lastName'], payload)
		//}
		//case actionTypes.UPDATE_REGISTERED_EMAIL: {
		//	console.log('payload: ', payload)
		//	return state.set(['email'], payload)
		//}
		//case actionTypes.UPDATE_REGISTERED_PASSWORD: {
		//	console.log('payload: ', payload)
		//	return state.set(['password'], payload)
		//}
		//case actionTypes.UPDATE_REGISTERED_ERRORS: {
		//	console.log('payload: ', payload)
		//	return state.set(['errors'], payload)
		//}
		default: return state
	}
}