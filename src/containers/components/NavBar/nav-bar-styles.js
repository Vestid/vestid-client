import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {primaryblue, vgray, muliFont} from '../../../styles/colors_'
export const NavContainer = styled('div')`
    font-weight:100;
    font-family: ${muliFont};
    font-size:22px;
    height:10vh;
    background: white;
    color: ${primaryblue};
    display: flex;
    justify-content:space-around;
    align-items: center;
    cursor: pointer;
    width: 85vw;
    margin: 0 auto;
`
export const Pages = styled(NavLink)`
     padding-bottom: 5px;
     border-bottom: 3px solid white;
     font-size: 1.3rem;
      &:hover {
       border-bottom: 3px solid ${primaryblue};
       transition: all .3s;
      }
`