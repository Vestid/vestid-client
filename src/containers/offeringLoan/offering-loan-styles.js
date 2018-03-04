import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 90vh;
  align-items: baseline;
  transition: filter 1s ease-in-out;
  will-change: filter;
  perspective: 1000px;
  backface-visibility: hidden;
`