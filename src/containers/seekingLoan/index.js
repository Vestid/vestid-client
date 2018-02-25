import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {LoanNoticeContainer} from '../components/LoanNotice'
import constants from '../../constants'
const {seekingLoanNotice} = constants

class SeekingLoan extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
          <LoanNoticeContainer
            type={'seeking'}
          >
              <h1>What You're Filling Out</h1>
              <p>{seekingLoanNotice}</p>
          </LoanNoticeContainer>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(SeekingLoan))