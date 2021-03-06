import {combineEpics} from 'redux-observable'
import seekingLoanSubmission from './seekingLoanSubmission'
import verifyFormInput from './verifyFormInput'
import updateSeekLoanModal from './updateSeekLoanModal'

export default combineEpics(
  seekingLoanSubmission,
  verifyFormInput,
	updateSeekLoanModal
)