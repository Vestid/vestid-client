import styled from 'styled-components'

export const Container = styled.div`
	filter: ${({modalOpen}) => modalOpen ? `blur(3px)` : 'none'};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 90vh;
  align-items: baseline;
  transition: all 1s;
  will-change: filter;
  perspective: 1000px;
  backface-visibility: hidden;
`