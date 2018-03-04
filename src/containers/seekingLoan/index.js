import {connect} from 'react-redux'
import React, {Component} from 'react'
import constants from '../../constants'
import {Link, withRouter} from 'react-router-dom'
import {Container} from '../components/AuthNotice'
import {LoanNoticeContainer} from '../components/LoanNotice'
import {submitSeekingLoanForm, verifyFormInput} from './actions/actions'
import {FormContainer, FormInput, FormTitle, TextArea, FormButton} from '../components/Forms/FormsElements'

class SeekingLoan extends Component {
    constructor(props) {
        super(props)
        this.updateFormContent = this.updateFormContent.bind(this)
    }

     updateFormContent({target}) {
        const {dispatch} = this.props
        const {name, value} = target
         const payload = Object.assign({}, {[name]: value})
         dispatch(verifyFormInput(payload))
     }

     handleFormSubmission(evt) {
        evt.preventDefault()
        const {dispatch} = this.props
        dispatch(submitSeekingLoanForm())
     }

    render() {
        const {seekingLoanNotice} = constants
        const seekingLoan = this.props.state.seekingLoan.toJS()
        const inputItems = Object.entries(seekingLoan).map((e, i, a) => (
            (i <= 5) ? <FormInput key={i} name={a[i][0]} placeholder={a[i][1].placeholder} verified={a[i][1].verified} onChange={this.updateFormContent}/>
              : <TextArea key={i} name={a[i][0]} placeholder={a[i][1].placeholder} verified={a[i][1].verified} onChange={this.updateFormContent}/>
        ))
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
                  <FormButton onClick={this.handleFormSubmission.bind(this)}>Submit</FormButton>
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