import actionTypes from '../actions/actionTypes'
import { checkAuth } from '../actions/actions'
import { Observable } from 'rxjs/Observable'
import get from 'axios'


export default(action$, store) => {
    return action$.ofType(actionTypes.HOME_REMOVE_AUTH)
      .mergeMap(({type, payload}) => {
            console.log('type: ', type)
            console.log('payload: ', payload);
            return Observable.fromPromise(get('https://swapi.co/api/people/1'))
                .mergeMap(response => {
                    console.log('swapi response: ', response)
                    return Observable.empty()
                    // return Observable.of(checkAuth())
                })
        })
}