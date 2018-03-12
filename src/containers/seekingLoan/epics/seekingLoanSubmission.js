import { Observable } from 'rxjs/Observable'
import actionTypes from '../actions/actionTypes'
import {parseLoanForm} from '../../../helpers'
import FireStoreService from '../../../services/fireStore'
export default (action$, store) => {
    return action$.ofType(actionTypes.SUBMIT_SEEKING_LOAN_FORM)
      .mergeMap(() => {
          const {seekingLoan, user} = store.getState()
	        const {authed, uid, emailVerified} = user.toJS()
          const form = parseLoanForm(seekingLoan.toJS())
          return Observable.fromPromise(FireStoreService.addUserLoanForm(form, uid))
            .mergeMap(response => {

	            return Observable.empty()
            })


      })
}