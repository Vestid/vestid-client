import 'rxjs/Rx';
import React from 'react'
import './styles/normalize.css'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './reducers/store';
import RoutingRoot from './routing/RoutingRoot'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import * as actions from './services/fireAuth/actions/actions'

import options from './services/config'
import AuthService from './services/fireAuth/'
const store = createStore();
const {dispatch} = store
const boundActions = bindActionCreators(actions, dispatch)
//console.log('bound: ', boundActions)
new AuthService(boundActions, options)
AuthService.authListener()

console.log('store: ', dispatch)
console.log('actions: ', actions)

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Route exact component={RoutingRoot}/>
            </Router>
        </Provider>,
     document.getElementById('root')
)