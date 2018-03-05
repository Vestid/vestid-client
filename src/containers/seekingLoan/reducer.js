import {fromJS} from 'immutable'
import actionTypes from './actions/actionTypes'
import {vgray} from '../../styles/colors_'

const initialState = fromJS({
	firstName: {placeholder: 'john', verified: false, color: `${vgray}`},
	lastName: {placeholder: 'doe', verified: false, color: `${vgray}`},
	email: {placeholder: 'john_doe@example.com', verified: false, color: `${vgray}`},
	seekingLoanAmount: {placeholder: 'loan amount you are seeking', verified: false, color: `${vgray}`},
	businessType: {placeholder: 'type of business, e.g. technology, culinary, etc.', verified: false, color: `${vgray}`},
	location: {placeholder: 'where are you located', verified: false, color: `${vgray}`},
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