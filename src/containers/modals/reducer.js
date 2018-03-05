import {fromJS} from 'immutable'
import actionTypes from './actions/actionTypes'

const initialState = fromJS({
	seekingLoanModal: {
		loaded: false,
		visible: true
	},
	offeringLoanModal: {
		loaded: false,
		visible: true
	}
})

export default (state = initialState, {type = null, payload = null}) => {
	switch(type) {
		case actionTypes.UPDATE_SEEK_LOAN_MODAL_LOADED: {
			return state.setIn(['seekingLoanModal'], payload)
		}
		case actionTypes.UPDATE_SEEK_LOAN_MODAL_VISIBILITY: {
			return state.setIn(['seekingLoanModal'], payload)
		}
		default: return state
	}
}