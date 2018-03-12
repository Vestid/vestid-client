import styled from 'styled-components'
import {boxshadow, hovergreen, logingray, muliFont, primaryblue, vgray} from '../../styles/colors_'

export const Input = styled.input`
  font-size: 1rem;
  height: 3rem;
  width: 75%;
  padding: 7px;
  margin-bottom: 30px;
`
export const Button = styled.button`
  width: 426px;
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
export const BtnWrap = styled.div`
  display: flex;
`
export const RegisterForm = styled.section`
  margin: 0 auto;
  width: 425px;
  padding: 6vh 0 0;
  box-shadow: ${boxshadow};
  background: ${primaryblue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  //${Input}:nth-last-child() {
  //  margin-top: 3vh;
  //}
`
export const RegisterSection = styled('section')`
  font-family: ${muliFont};
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 7vh;
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
