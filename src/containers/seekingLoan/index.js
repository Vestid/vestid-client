import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {LoanNoticeContainer} from '../components/LoanNotice'
import {Container} from '../components/AuthNotice'
import constants from '../../constants'
import {FormContainer, FormInput, FormSelect, FormTitle} from '../components/Forms'

const {seekingLoanNotice} = constants

class SeekingLoan extends Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleInputChange(evt) {
        console.log(evt.target.name)
        console.log('val: ', evt.target.value)
    }

    handleOptionChange(evt) {
        console.log('options: ', evt.target.value)
    }

    submitForm(evt) {
        console.log('ev: ', evt.target.value)
    }

    render() {
        let selectItems = []
        const {seekingLoan} = this.props.state
        const inputItems = Object.entries(seekingLoan).map((e, i, a) => {
            if (i <= 2) {
                return <FormInput key={i}
                                  name={a[i][0]}
                                  placeholder={a[i][1]}
                                  onBlur={this.submitForm}
                                  onChange={this.handleInputChange}/>
            } else {
                selectItems.push(
                  <FormSelect key={e} onChange={this.handleOptionChange}>
                      { a[i][1].map((elm,idx) => (<option key={`${elm}_${idx}`} value={elm}>{elm}</option>)) }
                  </FormSelect>
                )
            }
        })
        return (
          <Container>
              <LoanNoticeContainer type={'seeking'}>
                  <h1>What You're Filling Out</h1>
                  <p>{seekingLoanNotice}</p>
              </LoanNoticeContainer>
              <FormContainer>
                  <FormTitle type={'seeking'}>
                      <span>S</span>eeking<span>L</span>oan<span>F</span>orm
                  </FormTitle>
                  { inputItems }
                  { selectItems }
              </FormContainer>
              {/*<AuthNotice>*/}
              {/*<p>please <Link to={'test'}><span>login</span></Link> or <Link to={'test'}><span>create</span></Link> an account to fill out the seeking loan form</p>*/}
              {/*</AuthNotice>*/}
          </Container>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(SeekingLoan))