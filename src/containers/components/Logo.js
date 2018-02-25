import styled from 'styled-components'
import {vgray} from '../../styles/colors_'

const Logo = styled('p')`
  font-size: 2vmax;
  &::before {
    content: 'V'
  }
  &::after {
    content: 'estid';
    color: ${vgray};
  }
`

export default Logo