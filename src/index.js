import 'rxjs/Rx';
import React from 'react'
import './styles/normalize.css'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './reducers/store';
import RoutingRoot from './routing/RoutingRoot'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const store = createStore();

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Route exact component={RoutingRoot}/>
            </Router>
        </Provider>,
     document.getElementById('root')
)