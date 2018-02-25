import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {pagesConfig} from './pagesConfig'
import {NavContainer, Pages} from './nav-bar-styles'

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const pages = pagesConfig.map(({page, to, activeStyle = {}}, i) => (
          <Pages to={to}
                 key={i}
                 exact={true}
                 activeStyle={activeStyle}> {page} </Pages>
        ));
        return (
          <NavContainer>
              {pages}
          </NavContainer>
        )
    }
}
const mapStateToProps = state => ({state})

export default withRouter(connect(mapStateToProps)(Nav))