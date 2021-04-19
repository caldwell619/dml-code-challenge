import styled from 'styled-components'

import { mobileBreakpoint, desktopBreakpoint } from 'constants/styles'

export const PromptContainer = styled.div`
  font-size: 1.6em;
  margin-bottom: 5%;
  padding: 8% 0;
  @media screen and (min-width: ${mobileBreakpoint}) {
    margin-bottom: 3%;
    font-size: 2em;
  }
  @media screen and (min-width: ${desktopBreakpoint}) {
    padding: 4% 0;
    margin-bottom: 0.5%;
  }
`

export const QuestionContainer = styled.div`
  font-size: 1.4em;
  margin-bottom: 10%;
  @media screen and (min-width: ${mobileBreakpoint}) {
    margin-bottom: 0;
    font-size: 1.7em;
  }
  @media screen and (min-width: ${desktopBreakpoint}) {
    margin-bottom: 0%;
  }
`

export const Container = styled.div`
  width: 90%;
  padding-bottom: 20vh;
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 70%;
  }
`
