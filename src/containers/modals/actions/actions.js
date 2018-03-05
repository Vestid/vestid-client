import actionTypes from './actionTypes'

export const updateSeekLoanModalVisibility = (payload) => ({
	type: actionTypes.UPDATE_SEEK_LOAN_MODAL_VISIBILITY,
	payload
})

export const updateSeekLoanModalLoaded = (payload) => ({
	type: actionTypes.UPDATE_SEEK_LOAN_MODAL_LOADED,
	payload
})

export const updateSeekLoanModal = (payload) => ({
	type: actionTypes.UPDATE_SEEK_LOAN_MODAL,
	payload
})

export const updateOfferLoanModalVisibility = (payload) => ({
	type: actionTypes.UPDATE_OFFER_LOAN_MODAL_VISIBILITY,
	payload
})
export const updateOfferLoanModalLoaded = (payload) => ({
	type: actionTypes.UPDATE_OFFER_LOAN_MODAL_LOADED,
	payload
})
export const updateOfferLoanModal = (payload) => ({
	type: actionTypes.UPDATE_OFFER_LOAN_MODAL,
	payload
})


