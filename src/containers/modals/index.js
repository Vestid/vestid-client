import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
const modalRoot = document.getElementById('modal-root')

class ModalPortal extends Component {
	constructor(props) {
		super(props)
		this.el = document.createElement('div')
	}
	componentDidMount() {
		modalRoot.appendChild(this.el)
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el)
	}

	render() {
		return (
			ReactDOM.createPortal(
				this.props.children,
				modalRoot
			)
		)
	}
}
const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(ModalPortal))