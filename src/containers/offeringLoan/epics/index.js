import {combineEpics} from 'redux-observable'
import updateOfferLoanModal from './updateOfferLoanModal'

export default combineEpics(
	updateOfferLoanModal
)