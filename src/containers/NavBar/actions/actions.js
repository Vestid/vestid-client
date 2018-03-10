import actionTypes from './actionTypes'

export const loadNav = (payload) => ({
	type: actionTypes.LOAD_NAV_BAR,
	payload
})

export const updateNav = (payload) => ({
    type: actionTypes.UPDATE_NAV_BAR,
    payload
})
