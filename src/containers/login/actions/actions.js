import actionTypes from './actionTypes'

export const updateEmailInput = (input) => ({
    type: actionTypes.UPDATE_EMAIL_INPUT,
    payload: input
})

export const updatePasswordInput = (input) => ({
    type: actionTypes.UPDATE_PASSWORD_INPUT,
    payload: input
})

export const updateLoginAttempts = () => ({
    type: actionTypes.UPDATE_LOGIN_ATTEMPTS,
})
export const updateUserAuthed = (authed) => ({
    type: actionTypes.UPDATE_USER_AUTHENTICATION,
    payload: authed
})

export const validateLoginCreds = () => ({
    type: actionTypes.VALIDATE_LOGIN_CREDS
})

export const submitLoginCreds = (creds) => ({
    type: actionTypes.SUBMIT_LOGIN_CREDENTIALS,
    payload: creds
})

export const clearLoginCreds = () => ({
    type: actionTypes.CLEAR_LOGIN_CREDENTIALS
})