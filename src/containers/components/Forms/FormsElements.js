import styled from 'styled-components'
import {hovergray, hovergreen, primaryblue, primaryFont, vgray} from '../../../styles/colors_'

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
  padding: 10px;
`

export const TextArea = styled.textarea`
  height: 20vh;
  padding: 10px;
  border: 2px solid ${vgray};
  margin-bottom: 15px;
  color: ${primaryblue};
  font-size: 1.1rem;
    &:focus {
      outline: none;
    }
`
export const FormButton = styled.button`
    cursor: pointer;
    color: #0099C5;
    background: ${hovergray};
    font-size: 1.1em;
    margin-top: 10px;
    padding: 8px;
    &:hover {
      background: ${hovergreen};
      color: white;
      transition: all 0.3ms;
    }
`