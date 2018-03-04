import styled from 'styled-components'
import {offwhite, primaryblue, primaryFont, vgray} from '../../styles/colors_'

export const LoanNoticeContainer = styled.div`
  font-family: ${primaryFont};
  padding: 20px;
  font-size: 1.5rem;
  border: 3px solid ${({type}) => (type === 'seeking') ? `${primaryblue}`: `${vgray}`};
  display: flex;
  flex-direction: column;
  max-width: 35vw;
  max-height: 70vh;
  position:relative;
  background: ${offwhite};
  h1 {
    color: ${({type}) => (type === 'seeking') ? `${primaryblue}` : `${vgray}`}
  }
  p {
    color: ${({type}) => (type === 'seeking') ? `${vgray}` : `${primaryblue}`}
  }
`
