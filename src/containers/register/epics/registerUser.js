import actionTypes from '../actions/actionTypes'
import {Observable} from 'rxjs/Observable'
import AuthService from '../../../services/fireAuth'

export default (action$, store) => {
    return action$.ofType(actionTypes.SUBMIT_REGISTER_FORM)
      .mergeMap(({type, payload}) => {
        const {firstName, lastName, email, password} = store.getState().signup.toJS()
	      console.log('signup properties: ', firstName, lastName, email, password)
	      return Observable.fromPromise(AuthService.registerUser(email, password))
		      .mergeMap(response => {
		      	console.log('auth response: ', response)
			      return Observable.empty()
		      })
      })
}