import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {RegisterForm, RegisterSection, Button, Input, BtnWrap} from './register-style'
import {updateRegisterForm, submitRegisterForm} from './actions/actions'

class Register extends Component{
    constructor(props){
        super(props)
    }

	updateRegisterForm({target}) {
		const {dispatch} = this.props
		const {name, value} = target
		let input = Object.assign({}, {[name]:value})
		dispatch(updateRegisterForm(input))
	}

	handleUserRegistration() {
		const {dispatch} = this.props
		dispatch(submitRegisterForm())
	}

    render(){
        return(
        <div>
	        <RegisterSection>
		        <RegisterForm>
			        <Input name='firstName' type='text' placeholder='first name'
			               onChange={this.updateRegisterForm.bind(this)}/>
			        <Input name='lastName' type='text' placeholder='last name'
			               onChange={this.updateRegisterForm.bind(this)}/>
			        <Input name='email' type='email' placeholder='john_doe@vestid.com'
			               onChange={this.updateRegisterForm.bind(this)}/>
			        <Input name='password' type='password' placeholder='***********'
			               onChange={this.updateRegisterForm.bind(this)}
			        />
			        {/*<Input type='password' placeholder='***********'*/}
			               {/*onChange={this.handlePasswordInput.bind(this)}*/}
			               {/*onKeyPress={this.handleKeyPress.bind(this)}*/}
			        {/*/>*/}
			        <BtnWrap>
				        <Button side={true}
				                onClick={this.handleUserRegistration.bind(this)}>register</Button>
			        </BtnWrap>
		        </RegisterForm>
	        </RegisterSection>
        </div>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(Register))