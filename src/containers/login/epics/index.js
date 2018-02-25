import { combineEpics } from 'redux-observable'
import validateLoginCreds from './validateLoginCreds'

export default combineEpics(
  validateLoginCreds,
)