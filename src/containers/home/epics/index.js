import { combineEpics } from 'redux-observable'
import testGet from './testGet'

export default combineEpics(
    testGet
)