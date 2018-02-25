import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Why extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div>
            Why Route
        </div>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(Why))