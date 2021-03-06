import React, {Component} from 'react'
import AsyncComponent from './AsyncComponent'
import {connect} from 'react-redux'
import * as route from './routesConstant'
import {Route, Switch, withRouter} from 'react-router-dom'
// ============= Static Routing ========================================
const Nav = AsyncComponent(() => import('../containers/NavBar/NavBar'))
// ============= Dynamic Routing ========================================
const Home = AsyncComponent(() => import('../containers/home'))
const Login = AsyncComponent(() => import('../containers/login'))
const OfferingLoan = AsyncComponent(() => import('../containers/offeringLoan'))
const SeekingLoan = AsyncComponent(() => import('../containers/seekingLoan'))
const ResetPassword = AsyncComponent(() => import('../containers/resetPW'))
const AllLoans = AsyncComponent(() => import('../containers/allLoans'))
const Register = AsyncComponent(() => import('../containers/register'))

class RoutingRoot extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div>
              <Nav/>
              <Switch>
                  <Route exact path={route.homeRoot} component={Home}/>
                  <Route path={route.login} component={Login}/>
                  <Route path={route.register} component={Register}/>
                  <Route path={route.seekingLoan} component={SeekingLoan}/>
                  <Route path={route.offeringLoan} component={OfferingLoan}/>
                  <Route path={route.resetPassword} component={ResetPassword}/>
                  <Route path={route.allLoans} component={AllLoans}/>
              </Switch>
          </div>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(RoutingRoot))