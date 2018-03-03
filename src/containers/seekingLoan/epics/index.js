import {combineEpics} from 'redux-observable'
import SeekingLoanSubmission from './SeekingLoanSubmission'

export default combineEpics(
  SeekingLoanSubmission
)