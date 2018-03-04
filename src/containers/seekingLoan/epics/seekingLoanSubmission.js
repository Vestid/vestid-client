import { Observable } from 'rxjs/Observable'
import actionTypes from '../actions/actionTypes'

export default (action$, store) => {
    return action$.ofType(actionTypes.SUBMIT_SEEKING_LOAN_FORM)
      .mergeMap(() => {
          const {seekingLoan} = store.getState()
          console.log('seekingLoan: ', seekingLoan.toJS())
          return Observable.empty()
      })
}