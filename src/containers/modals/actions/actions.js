import actionTypes from './actionTypes'

export const updateModalVisibility = (payload) => ({
	type: actionTypes.UPDATE_MODAL_VISIBILITY,
	payload
})

export const updateModalLoaded = (payload) => ({
	type: actionTypes.UPDATE_MODAL_LOADED,
	payload
})