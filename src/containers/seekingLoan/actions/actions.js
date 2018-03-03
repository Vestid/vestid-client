import actionTypes from './actionTypes'

export const updateSeekingLoanForm = (payload) => ({
    type: actionTypes.UPDATE_SEEKING_LOAN_FORM,
    payload
})

export const submitSeekingLoanForm = () => ({
    type: actionTypes.SUBMIT_SEEKING_LOAN_FORM,
})