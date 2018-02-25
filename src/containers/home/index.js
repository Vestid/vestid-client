import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import {LandingContainer, Section, Aside} from './home-styles'
import {offeringLoan, seekingLoan} from '../../routing/routesConstant'

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
                  <Link to={seekingLoan}>
                      <p>I'm seeking a loan</p>
                  </Link>
              </Aside>
              <Aside side={'left'}>
                  <Link to={offeringLoan}>
                    <p>I'm offering a loan</p>
                  </Link>
              </Aside>
          </LandingContainer>
        );
    }
}

const mapStateToProps = state => ({state})
export default withRouter(connect(mapStateToProps)(App))
