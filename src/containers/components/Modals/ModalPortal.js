import React, {Component} from 'react'
import ReactDOM from 'react-dom'
const modalRoot = document.getElementById('modal-root')

class ModalPortal extends Component {
	constructor(props) {
		super(props)
		this.el = document.createElement('div')
	}
	componentDidMount() {
		console.log('inside ModalPortal: ', this.props.children)
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

export default ModalPortal