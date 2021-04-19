import styled from 'styled-components'

import { mobileBreakpoint } from 'constants/styles'

export const AnswerOptionList = styled.ol`
  width: 90%;
  padding-left: 3%;
  margin: 0;
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 50%;
  }
  & li {
    margin: 3% 0;
  }
`

export const AnswerOptionTitle = styled.h3`
  margin-bottom: 1%;
`
