import { Observable } from 'rxjs/Observable'
import actionTypes from '../actions/actionTypes'
import {formatFormInput} from '../../../helpers'
export default (action$, store) => {
    return action$.ofType(actionTypes.VERIFY_SEEKING_LOAN_INPUT)
      .mergeMap(({type, payload}) => {
          formatFormInput(payload)
          console.log('payload: ', payload)
          return Observable.empty()
      })
}