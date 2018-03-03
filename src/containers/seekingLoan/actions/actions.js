import actionTypes from './actionTypes'

export const updateSeekingFormFirstName = (firstName) => ({
    type: actionTypes.UPDATE_SEEKING_FORM_FIRST_NAME,
    payload: firstName
})

export const updateSeekingFormLastName = (lastName) => ({
    type: actionTypes.UPDATE_SEEKING_FORM_LAST_NAME,
    payload: lastName
})

export const updateSeekingFormEmail = (email) => ({
    type: actionTypes.UPDATE_SEEKING_FORM_EMAIL
})