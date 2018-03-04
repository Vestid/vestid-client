import React, {Component} from 'react'
import {connect} from 'react-redux'
import constants from '../../constants'
import {withRouter} from 'react-router-dom'
import {Container} from './seeking-loan-styles'
import {LoanNoticeContainer} from '../components/LoanNotice'
import {submitSeekingLoanForm, verifyFormInput} from './actions/actions'
import {FormButton, FormContainer, FormInput, FormTitle, TextArea} from '../components/Forms/FormsElements'
import ModalPortal from '../modals'
import {Modal} from '../modals/modal-styles'
import {updateSeekLoanModal} from '../modals/actions/actions'
import './style.css'


class SeekingLoan extends Component {
	constructor(props) {
		super(props)
		this.updateFormContent = this.updateFormContent.bind(this)
	}

	handleToggleModal(evt) {
		evt.stopPropagation()
		const {dispatch} = this.props
		const {loaded, visible} = this.props.state.modals.toJS().seekingLoanModal
		const {name} = evt.target.dataset
		if(name === 'close-modal'){
			dispatch(updateSeekLoanModal({loaded, visible}))
		}
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

	//componentWillUnmount() {
	// }

//TODO: have a reset to put everything back to initial state
	render() {
		const {seekingLoanNotice} = constants
		const {seekingLoan, modals} = this.props.state
		const {seekingLoanModal} = modals.toJS()
		const {loaded, visible} = seekingLoanModal
		const inputItems = Object.entries(seekingLoan.toJS()).map((e, i, a) => (
			(i <= 5) ?
				<FormInput key={i} name={a[i][0]} placeholder={a[i][1].placeholder} verified={a[i][1].verified} onChange={this.updateFormContent}/>
				: <TextArea key={i} name={a[i][0]} placeholder={a[i][1].placeholder} verified={a[i][1].verified} onChange={this.updateFormContent}/>
		))
		return (
			<Container modalOpen={visible}>
				{(!loaded && visible) ?
					<ModalPortal>
						<Modal onClick={this.handleToggleModal.bind(this)} data-name='close-modal'>
							<LoanNoticeContainer type={'seeking'}>
								<i className="fas fa-times" id='x-icon' data-name='close-modal' onClick={this.handleToggleModal.bind(this)}/>
								<h1>What You're Filling Out</h1>
								<p>{seekingLoanNotice}</p>
							</LoanNoticeContainer>
						</Modal>
					</ModalPortal> :
					null
				}
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