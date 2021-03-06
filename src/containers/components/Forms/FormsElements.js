import styled from 'styled-components'
import {hovergray, hovergreen, invalidred, primaryblue, primaryFont, vgray} from '../../../styles/colors_'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px;
  min-width: 37vw;
  background-color: #e9ecef;
  box-shadow:5px 6px 7px #b9b9b9;
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
  border: 2px solid ${({color}) => `${color}`};
  height: 5vh;
  margin-bottom: 15px;
  font-size: 1.1rem;
  padding: 10px;
  box-shadow: 0 0.25rem 0.125rem 0 rgba(0,0,0,.1);
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
    color: white;
    background: ${hovergray};
    font-size: 1.1em;
    margin-top: 10px;
    padding: 8px;
    &:hover {
      background: ${hovergreen};
      color: white;
      transition: all 0.3s;
    }
`