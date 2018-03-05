import {fromJS} from 'immutable'
import actionTypes from './actions/actionTypes'

const initialState = fromJS({
	firstName: {placeholder: 'john', verified: false, color: null},
	lastName: {placeholder: 'doe', verified: false, color: null},
	email: {placeholder: 'john_doe@example.com', verified: false, color: null},
	seekingLoanAmount: {placeholder: 'loan amount you are seeking', verified: false, color: null},
	businessType: {placeholder: 'type of business, e.g. technology, culinary, etc.', verified: false, color: null},
	location: {placeholder: 'where are you located', verified: false, color: null},
	description: {placeholder: 'please describe in a couple sentences the "why" behind your business and what this loan will be used for', verified: false, color: null
	}
})
export default (state = initialState, {type = null, payload = null}) => {
	switch (type) {
		case actionTypes.UPDATE_SEEKING_LOAN_FORM:
			return state.merge(payload)
		default:
			return state
	}
}