import actionTypes from '../actions/actionTypes'
import { Observable } from 'rxjs/Observable'
import AuthService from '../../../services/fireAuth'

export default (action$, store) => {
    return action$.ofType(actionTypes.VALIDATE_LOGIN_CREDS)
      .mergeMap(({type}) => {
          const {email = '', password = '', authenticated = false} = store.getState().login
          const user = Object.assign({}, {email: email.toLowerCase(), password})
          return Observable.fromPromise(AuthService.signInUser(email, password))
             .mergeMap(response => {
                 console.log('response: ', response);
                 return Observable.empty()
             })
      })
}