import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {LoginSection, LoginForm, Input, Button, BtnWrap} from './login-style'
import {validateLoginCreds, updateEmailInput, updatePasswordInput, updateLoginAttempts} from './actions/actions'
import AuthService from '../../services/fireAuth'
import {register} from '../../routing/routesConstant'

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
        const {dispatch} = this.props
        dispatch(validateLoginCreds())
    }

    handlePasswordReset() {
        //todo: add logic here
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
                      <Link to={register}>
                        <Button side={false}>register</Button>
                      </Link>
                    </BtnWrap>
                </LoginForm>
            </LoginSection>
        </div>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(Login))