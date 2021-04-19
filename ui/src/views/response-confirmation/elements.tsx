import styled from 'styled-components'

import { mobileBreakpoint } from 'constants/styles'

export const Title = styled.h2`
  @media screen and (min-width: ${mobileBreakpoint}) {
    font-size: 3em;
    margin: 1%;
  }
`

export const Subtitle = styled.p`
  width: 80%;
  text-align: center;
  margin: 1% 0;
  @media screen and (min-width: ${mobileBreakpoint}) {
    margin: 0.5%;
    font-size: 1.4em;
  }
`
