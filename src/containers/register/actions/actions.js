import actionTypes from './actionTypes'


export const updateRegisterForm = (payload) => ({
    type: actionTypes.UPDATE_REGISTERED_FORM,
    payload
})


export const submitRegisterForm = (payload) => ({
    type: actionTypes.SUBMIT_REGISTER_FORM,
})

