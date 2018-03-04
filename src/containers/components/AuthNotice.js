import styled from 'styled-components'
import {primaryblue, primaryFont, vgray} from '../../styles/colors_'

export const AuthNotice = styled.div`
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