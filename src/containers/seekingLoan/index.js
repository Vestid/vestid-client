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
        this.handleInputChange = this.handleInputChange.bind(this)
        this.updateFormValue = this.updateFormValue.bind(this)
    }

    handleInputChange(evt) {
        console.log(evt.target.name)
        console.log('val: ', evt.target.value)
    }

    handleOptionChange(evt) {
    }

    updateFormValue(evt) {
        console.log('ev: ', evt.target.value)
    }

    render() {
        const {seekingLoan} = this.props.state
        let options
        const inputItems = Object.entries(seekingLoan).map((e, i, a) => {
            if (i <= 2) {
                return <FormInput key={i}
                                  name={a[i][0]}
                                  placeholder={a[i][1]}
                                  onBlur={this.updateFormValue}
                                  onChange={this.handleInputChange}/>
            } else {
                console.log('e: ', e)
                console.log('i: ', i)
                console.log('a: ', a)
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
                  {inputItems}
                  <FormSelect>
                      <option value="one">one</option>
                      <option value="two">two</option>
                      <option value="three">three</option>
                      <option value="four">three</option>
                  </FormSelect>
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