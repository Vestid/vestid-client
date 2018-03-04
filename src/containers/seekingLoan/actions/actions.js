import actionTypes from './actionTypes'

export const updateSeekingLoanForm = (payload) => ({
    type: actionTypes.UPDATE_SEEKING_LOAN_FORM,
    payload
})

export const submitSeekingLoanForm = () => ({
    type: actionTypes.SUBMIT_SEEKING_LOAN_FORM,
})

export const verifyFormInput = (payload) => ({
    type: actionTypes.VERIFY_SEEKING_LOAN_INPUT,
    payload
})