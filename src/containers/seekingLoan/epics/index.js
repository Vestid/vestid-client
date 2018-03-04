import {combineEpics} from 'redux-observable'
import seekingLoanSubmission from './seekingLoanSubmission'
import verifyFormInput from './verifyFormInput'

export default combineEpics(
  seekingLoanSubmission,
  verifyFormInput
)