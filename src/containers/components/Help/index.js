import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Help extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
        <div>
            Howdy
        </div>
        )
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(Help))