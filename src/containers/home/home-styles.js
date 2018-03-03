import styled from 'styled-components'
import {primaryblue, primaryFont, rightshadow, vgray, vshadow} from '../../styles/colors_'

export const LandingContainer = styled('div')`
  display: flex;
  width: 100vw;
  height: 90vh;
  font-family: ${primaryFont};
`

export const Section = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 38vmax;
  width: 100vw;
  height: 90vh;
  color: ${vgray};
  cursor: default;
    p {
      text-shadow: ${vshadow};
      text-align: center;
      margin: 0;
    }
`

export const Aside = styled.aside`
  color: ${({side}) => (side === 'right') ? `${primaryblue}` : 'white'};
  background: ${({side}) => (side === 'right') ? 'white' : `${primaryblue}`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-size: 3vmax;
  width: 50%;
  box-shadow: ${({side}) => (side !== 'right') ? `${rightshadow}` : 'none'};
    p {
      position: relative;
      z-index: 100;
      cursor: pointer;
      text-decoration: underline;
    }
`