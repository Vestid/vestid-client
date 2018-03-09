import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {NavContainer, Pages} from './nav-bar-styles'

class Nav extends Component {
	constructor() {
		super()
	}

	render() {
		const {pages} = this.props.state.navbar.toJS()
		const navigation = pages.map(({page, to, activeStyle = {}}, i) => (
			<Pages to={to}
			       key={i}
			       exact={true}
			       activeStyle={activeStyle}> {page} </Pages>
		))
		return (
			<NavContainer>
				{navigation}
			</NavContainer>
		)
	}
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(Nav))