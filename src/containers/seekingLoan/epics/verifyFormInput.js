import { Observable } from 'rxjs/Observable'
import actionTypes from '../actions/actionTypes'
import {formatFormInput} from '../../../helpers'
export default (action$, store) => {
    return action$.ofType(actionTypes.VERIFY_SEEKING_LOAN_INPUT)
      .mergeMap(({type, payload}) => {
          console.log('payload before: ', payload)
          let formmated = formatFormInput(payload)
          console.log('format after: ', formmated[0])
          return Observable.empty()
      })
}