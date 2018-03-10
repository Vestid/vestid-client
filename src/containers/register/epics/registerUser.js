import actionTypes from '../actions/actionTypes'
import {Observable} from 'rxjs/Observable'
import AuthService from '../../../services/fireAuth'
import {updateAuthInfo} from '../../../services/fireAuth/actions/actions'

export default (action$, store) => {
    return action$.ofType(actionTypes.SUBMIT_REGISTER_FORM)
      .mergeMap(({type, payload}) => {
        const {firstName, lastName, email, password} = store.getState().signup.toJS()
	      console.log('signup properties: ', firstName, lastName, email, password)
	      return Observable.fromPromise(AuthService.registerUser(email, password))
		      .mergeMap(response => {
			      console.log('auth response: ', response)
		      	if(response.uid){
							const {emailVerified, uid} = response
				      const userInfo = Object.assign({}, {['authed']: true, firstName, lastName, emailVerified, uid})
				      console.log('userInfo: ', userInfo)
				      return Observable.of(updateAuthInfo(userInfo))
			      }
			      return Observable.empty()
		      })
      })
}