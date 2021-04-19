import styled from 'styled-components'

import { mobileBreakpoint } from 'constants/styles'
import { FlexContainer } from 'components/shared'

export const Container = styled(FlexContainer)`
  height: 60vh;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2%;
  & > div {
    width: 90%;
    @media screen and (min-width: ${mobileBreakpoint}) {
      width: 40%;
    }
  }
`

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

export const Form = styled.form`
  width: 90%;
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 40%;
  }
`
