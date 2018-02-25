import styled from 'styled-components'
import {primaryblue, vgray} from '../../styles/colors_'
//
//export const LoanNoticeTitle = styled.h1`
//  color: ${({type}) ? => (type === 'seeking') ? : ''}
//`

export const LoanNoticeContainer = styled.div`
  padding: 20px;
  font-size: 1.5em;
  border: 3px solid ${({type}) => (type === 'seeking') ? `${primaryblue}`: `${vgray}`};
  display: flex;
  flex-direction: column;
  max-width: 35vw;
  max-height: 70vh;
  margin-top: 45px;
  h1 {
    color: ${({type}) => (type === 'seeking') ? `${primaryblue}` : `${vgray}`}
  }
`
