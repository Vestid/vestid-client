import styled from 'styled-components'
import {primaryblue, primaryFont, vgray} from '../../styles/colors_'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 90vh;
  align-items: baseline;
`

export const AuthNotice = styled.div`
    padding: 20px;
    font-family: ${primaryFont};
    min-width: 35vw;
    font-size: 1.5rem;
    border: 2px solid rgba(218,217,217,.7);
    color: ${vgray};
    p {min-width: 35vw;}
    span {
      color: ${primaryblue};
    }
`