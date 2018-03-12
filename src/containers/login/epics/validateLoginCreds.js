import actionTypes from '../actions/actionTypes'
import { Observable } from 'rxjs/Observable'
import AuthService from '../../../services/fireAuth'
import {updateAuthInfo} from '../../../services/fireAuth/actions/actions'
import {push} from "react-router-redux";

export default (action$, store) => {
    return action$.ofType(actionTypes.VALIDATE_LOGIN_CREDS)
      .mergeMap(({type}) => {
          const {email = '', password = '', authenticated = false} = store.getState().login
          //const user = Object.assign({}, {email: email.toLowerCase(), password})
          return Observable.fromPromise(AuthService.signInUser(email.toLowerCase(), password))
             .mergeMap(response => {
                 //console.log('login response: ', response);
                 if(response.uid) {
                   const {uid} = response
                   const userInfo = Object.assign({}, {uid, ['authed']:true})
                   return Observable.of(updateAuthInfo(userInfo), push('/'))
                 }
                 return Observable.empty()
             })
      })
}