import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {LoginSection, LoginForm, Input, Button, BtnWrap} from './login-style'
import {validateLoginCreds, updateEmailInput, updatePasswordInput, updateLoginAttempts} from './actions/actions'
import AuthService from '../../services/fireAuth'

class Login extends Component{
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
      let email = 'dallin.r.parker@gmail.com'
      let pw = 'dallinparker'
      AuthService.loginUser(email, pw)
        //const {dispatch} = this.props
        //dispatch(validateLoginCreds())
    }
    handlePasswordReset() {
	    let pw = 'thisismynewpassword'
	    let email = 'dallin.r.parker@gmail.com'
        AuthService.sendPasswordResetEmail(email)
    }

    render(){
        return(
        <div>
            <LoginSection>
                <LoginForm>
                    <Input type='email' placeholder='john_doe@vestid.com'
                           onChange={this.handleEmailInput.bind(this)}/>
                    <Input type='password' placeholder='***********'
                           onChange={this.handlePasswordInput.bind(this)}
                           onKeyPress={this.handleKeyPress.bind(this)}
                    />
                    <p onClick={this.handlePasswordReset.bind(this)}>forgot password?</p>
                    <BtnWrap>
                        <Button side={true}
                                onClick={this.handleLoginClick.bind(this)}>login</Button>
                        <Button side={false}>register</Button>
                    </BtnWrap>
                </LoginForm>
            </LoginSection>
        </div>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(Login))