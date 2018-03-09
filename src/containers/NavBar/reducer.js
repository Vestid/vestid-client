import React from 'react'
import {fromJS} from 'immutable'
import * as routes from '../../routing/routesConstant'
import actionTypes from './actions/actionTypes'
import Logo from '../components/Logo'
import {primaryblue} from '../../styles/colors_'
const activeStyle = {borderBottom: `3px solid ${primaryblue}`}

const initialState = fromJS({
	pages: [
		{page: 'Home', to: routes.homeRoot, activeStyle},
		{page: 'About', to: routes.about, activeStyle},
		{page: <Logo/>, to: routes.homeRoot},
		{page: 'Why', to: routes.why, activeStyle},
		{page: 'Login', to: routes.login, activeStyle}
	]
})

export default (state = initialState, {type = null, payload = null}) => {
	switch(type){
		case actionTypes.LOAD_NAV_BAR: {
			return state
		}
		case actionTypes.UPDATE_NAV_BAR: {
			console.log('payload for update nav bar: ', payload)
			return state
		}
		default: return state
	}
}