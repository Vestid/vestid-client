import actionTypes from '../actions/actionTypes'
import constants from '../../../constants'
import { Observable } from 'rxjs/Observable'
import axios from 'axios'

export default (action$, store) => {
    return action$.ofType(actionTypes.VALIDATE_LOGIN_CREDS)
      .mergeMap(({type}) => {
          console.log('const: ', constants.BASE_URL_DEV)
          const {BASE_URL_DEV} = constants
          const {email = '', password = '', authenticated = false} = store.getState().login
          const user = Object.assign({}, {email: email.toLowerCase(), password})
          return Observable.fromPromise(axios.post(`${BASE_URL_DEV}/auth/login`, user))
             .mergeMap(response => {
                 console.log('response: ', response);
                 return Observable.empty()
             })
      })
}