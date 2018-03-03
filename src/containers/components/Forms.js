import styled from 'styled-components'
import {primaryblue, primaryFont, vgray} from '../../styles/colors_'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 35vw;
`
export const FormTitle = styled.h1`
  font-family: ${primaryFont};
  display: flex;
  justify-content: center;
  color: ${({type}) => (type === 'seeking') ? `${primaryblue}` : `${vgray}`};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
    span{
       color: ${({type}) => (type === 'seeking') ? `${vgray}` : `${primaryblue}`};
       margin-left: 4px;
    }
`

export const FormInput = styled.input`
  border: 2px solid ${vgray};
  height: 5vh;
  margin-bottom: 15px;
  font-size: 1.1rem;
`
export const FormSelect = styled.select`
    border: 2px solid #797979;
    height: 5vh;
    margin-bottom: 15px;
    padding-left: 15px;
    font-size: 1.1em;
    color: #0099C5;
    &:focus {
      outline: none;
    }
`
