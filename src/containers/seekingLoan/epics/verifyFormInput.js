import { Observable } from 'rxjs/Observable'
import actionTypes from '../actions/actionTypes'
import {formatFormInput} from '../../../helpers'
import {updateSeekingLoanForm} from '../actions/actions'

export default (action$, store) => {
    return action$.ofType(actionTypes.VERIFY_SEEKING_LOAN_INPUT)
      .mergeMap(({type, payload}) => {
          const key = Object.keys(payload)[0]
          const value = Object.values(payload)[0].toLowerCase().trim()
          let format = formatFormInput(key, value)
          return Observable.of(updateSeekingLoanForm(format))
      })
}