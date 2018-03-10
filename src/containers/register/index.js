import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {register} from '../../routing/routesConstant'
import {RegisterForm, RegisterSection, Button, Input, BtnWrap} from './register-style'
import {updateEmailInput, updatePasswordInput, validateLoginCreds} from '../login/actions/actions'

class Register extends Component{
    constructor(props){
        super(props)
    }

	handleEmailInput({target}) {
		const {dispatch} = this.props
		dispatch(updateEmailInput(target.value))
	}

	handlePasswordInput({target}) {
		const {dispatch} = this.props
		dispatch(updatePasswordInput(target.value))
	}

	handleKeyPress({key}) {
		const {dispatch} = this.props
		return (key === 'Enter') ? dispatch(validateLoginCreds()) : null
	}

	handleLoginClick() {
		const {dispatch} = this.props
		dispatch(validateLoginCreds())
	}

    render(){
        return(
        <div>
	        <RegisterSection>
		        <RegisterForm>
			        <Input type='text' placeholder='first name'
			               onChange={this.handleEmailInput.bind(this)}/>
			        <Input type='text' placeholder='last name'
			               onChange={this.handleEmailInput.bind(this)}/>
			        <Input type='email' placeholder='john_doe@vestid.com'
			               onChange={this.handleEmailInput.bind(this)}/>
			        <Input type='password' placeholder='***********'
			               onChange={this.handlePasswordInput.bind(this)}
			               onKeyPress={this.handleKeyPress.bind(this)}
			        />
			        <Input type='password' placeholder='***********'
			               onChange={this.handlePasswordInput.bind(this)}
			               onKeyPress={this.handleKeyPress.bind(this)}
			        />
			        <BtnWrap>
				        <Button side={true}
				                onClick={this.handleLoginClick.bind(this)}>login</Button>
			        </BtnWrap>
		        </RegisterForm>
	        </RegisterSection>
        </div>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(Register))