import styled from 'styled-components'

import { ellipsis, mobileBreakpoint } from 'constants/styles'

export const AnswerOptionList = styled.ol`
  width: 90%;
  padding-left: 3%;
  margin: 0;
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 50%;
  }
  & svg {
    cursor: pointer;
    & * {
      cursor: pointer;
    }
  }
  & li {
    margin: 3% 0;

    & h3 {
      margin: 0;
    }
  }
  padding-bottom: 20vh;
`

export const AnswerOptionTitle = styled.h3`
  margin-bottom: 1%;
`

export const AnswerOptionText = styled.h3`
  ${ellipsis}
  width: 90%;
`
