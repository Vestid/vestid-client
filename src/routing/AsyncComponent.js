import React, {Component} from 'react'

export default getComponent => {
    return class AsyncComponent extends Component {
        constructor(props) {
            super(props)
            AsyncComponent.Component = null;
            this.state = {
                Component: AsyncComponent.Component
            }
        }

        componentWillMount() {
            if(!this.state.Component) {
                getComponent().then(module => module.default).then(Component => {
                    this.setState({ Component })
                })
            }
        }

        render() {
            const {Component} = this.state
            return (Component) ? <Component {...this.props} /> : null
        }
    }
}