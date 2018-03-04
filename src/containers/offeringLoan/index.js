import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {LoanNoticeContainer} from '../components/LoanNotice'
import {AuthNotice} from '../components/AuthNotice'
import {Container} from './offering-loan-styles'
import {login, register} from '../../routing/routesConstant'
import constants from '../../constants'

const {offeringLoanNotice} = constants

class OfferingLoan extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <Container>
              <LoanNoticeContainer type={'offering'}>
                  <h1>What You're Filling Out</h1>
                  <p>{offeringLoanNotice}</p>
              </LoanNoticeContainer>
              <AuthNotice>
                  <p>please <Link to={login}><span>login</span></Link> or <Link to={register}><span>create</span></Link> an account to fill out the seeking loan form</p>
              </AuthNotice>
          </Container>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(OfferingLoan))