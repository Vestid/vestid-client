import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {LoanNoticeContainer} from '../components/LoanNotice'
import {AuthNotice} from '../components/AuthNotice'
import {Container} from './offering-loan-styles'
import ModalPortal from '../modals'
import {Modal} from '../modals/modal-styles'
import constants from '../../constants'
import {updateSeekLoanModal} from '../modals/actions/actions'
import './style.css'

class OfferingLoan extends Component {
    constructor(props) {
        super(props)
    }

	handleToggleModal(evt) {
		evt.stopPropagation()
		const {dispatch} = this.props
		const {loaded, visible} = this.props.state.modals.toJS().seekingLoanModal
		const {name} = evt.target.dataset
		if (name === 'close-modal') {
			dispatch(updateSeekLoanModal({loaded, visible}))
		}
	}

    render() {
	    const {offeringLoanNotice} = constants
      const {modals} = this.props.state
	    const {offeringLoanModal} = modals.toJS()
	    const {loaded, visible} = offeringLoanModal
	    return (
          <Container>
	          {(!loaded && visible) ?
		          <ModalPortal>
			          <Modal onClick={this.handleToggleModal.bind(this)} data-name='close-modal'>
				          <LoanNoticeContainer type={'offering'}>
					          <i className="fas fa-times" id='x-icon' data-name='close-modal'
					             onClick={this.handleToggleModal.bind(this)}/>
					          <h1>What You're Filling Out</h1>
					          <p>{offeringLoanNotice}</p>
				          </LoanNoticeContainer>
			          </Modal>
		          </ModalPortal> :
		          null
	          }
              {/*<AuthNotice>*/}
                  {/*<p>please <Link to={login}><span>login</span></Link> or <Link to={register}><span>create</span></Link> an account to fill out the seeking loan form</p>*/}
              {/*</AuthNotice>*/}
          </Container>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(OfferingLoan))