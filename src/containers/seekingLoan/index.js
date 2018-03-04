import {connect} from 'react-redux'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import constants from '../../constants'
import {withRouter} from 'react-router-dom'
import {Container} from '../components/AuthNotice'
import {LoanNoticeContainer} from '../components/LoanNotice'
import {submitSeekingLoanForm, verifyFormInput} from './actions/actions'
import {FormButton, FormContainer, FormInput, FormTitle, TextArea} from '../components/Forms/FormsElements'
import {Modal} from '../components/Modals/modal-styles'
import ModalPortal from '../components/Modals/ModalPortal'

class SeekingLoan extends Component {
	constructor(props) {
		super(props)
		this.updateFormContent = this.updateFormContent.bind(this)
	}

	componentDidMount() {
		console.log('modal: ', this.props.children)
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

//TODO: have a reset to put everything back to initial state
	render() {
		const {seekingLoanNotice} = constants
		const seekingLoan = this.props.state.seekingLoan.toJS()
		const inputItems = Object.entries(seekingLoan).map((e, i, a) => (
			(i <= 5) ? <FormInput key={i} name={a[i][0]} placeholder={a[i][1].placeholder} verified={a[i][1].verified}
			                      onChange={this.updateFormContent}/>
				: <TextArea key={i} name={a[i][0]} placeholder={a[i][1].placeholder} verified={a[i][1].verified}
				            onChange={this.updateFormContent}/>
		))
		return (
			<Container>
				<ModalPortal>
					<Modal>
						<LoanNoticeContainer type={'seeking'}>
							<h1>What You're Filling Out</h1>
							<p>{seekingLoanNotice}</p>
						</LoanNoticeContainer>
					</Modal>
				</ModalPortal>
				{/*{ReactDOM.createPortal(<Modal/>, document.getElementById('modal-root'))}*/}
				<FormContainer>
					<FormTitle type={'seeking'}>
						<span>S</span>eeking<span>L</span>oan<span>F</span>orm
					</FormTitle>
					{inputItems}
					{/*TODO: if everything is passing validating have submit have a throbbing animation*/}
					{/*TODO: have a progress bar filling in based on how many inputs are validated*/}
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