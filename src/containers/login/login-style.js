import styled from 'styled-components'
import {boxshadow, hovergreen, logingray, muliFont, primaryblue, vgray} from '../../styles/colors_'

export const Input = styled('input')`
  font-size: 1rem;
  height: 3rem;
  width: 75%;
  padding: 7px;
`
export const Button = styled('button')`
  width: 212.5px;
  height: 3.25rem;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 7px;
  cursor:pointer;
  background: ${({side}) => side ? 'white' : `${vgray}`};
  color: ${({side}) => side ? `${vgray}` : 'white'};
   &:hover {
      background: ${hovergreen};
      color: white;
      transition: all .3s;
   }
`

export const BtnWrap = styled('div')`
  display: flex;
`
export const LoginForm = styled('section')`
  margin: 0 auto;
  width: 425px;
  height: 435px;
  box-shadow: ${boxshadow};
  background: ${primaryblue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${Input}:nth-child(1) {
    margin: 25% auto -10px;
  }
`
export const LoginSection = styled('section')`
  font-family: ${muliFont};
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 7vh;
  ${LoginForm}
    p {
      margin-top: -25px;
      text-align: right;
      text-decoration:underline;
      color: ${logingray};
      font-size: .9rem;
      font-style: italic;
      width: 75%;
      &:hover {
        cursor: pointer;
        color: white;
        transition: all .3s;
      }
    }
`
