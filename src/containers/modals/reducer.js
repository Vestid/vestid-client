import {fromJS} from 'immutable'

const initialState = fromJS({
	seekingLoanModal: {
		loaded: false,
		visible: false
	}
})

export default (state = initialState, {type = null, payload = null}) => {
	return state
}