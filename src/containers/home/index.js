import React, { Component } from 'react';
import { connect } from 'react-redux'
import {LandingContainer, Section, Aside, AsideRight} from './home-styles'
import { withRouter} from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <LandingContainer>
              <Section>
                  <p>V</p>
              </Section>
              <Aside side={'right'}>
                  <p>I'm seeking a loan</p>
              </Aside>
              <Aside side={'left'}>
                  <p>I'm offering a loan</p>
              </Aside>
          </LandingContainer>
        );
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(App))
