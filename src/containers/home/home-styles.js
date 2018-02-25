import styled from 'styled-components'
import {primaryblue, primaryFont, vgray, vshadow} from '../../styles/colors_'

export const LandingContainer = styled('div')`
  display: flex;
  width: 100vw;
  height: 90vh;
  font-family: ${primaryFont};
`

export const Section = styled('section')`
  position: absolute;
  width: 100%;
  font-size: 40em;
  color: ${vgray};
  cursor: default;
    p {
      text-shadow: ${vshadow};
      text-align: center;
      margin: 0;
    }
`

export const Aside = styled('aside')`
  color: ${({side}) => (side === 'right') ? `${primaryblue}` : 'white'};
  background: ${({side}) => (side === 'right') ? 'white' : `${primaryblue}`};
  text-align: center;
  font-style: italic;
  padding-top: 265px;
  font-size: 3em;
  width: 50%;
    p {
      position: relative;
      z-index: 100;
      cursor: pointer;
      text-decoration: underline;
    }
`

//export const AsideRight = styled('aside')`
//  color: white;
//  background: ${primaryblue};
//  text-align: center;
//  font-style: italic;
//  padding-top: 265px;
//  font-size: 3em;
//  width: 50%;
//`