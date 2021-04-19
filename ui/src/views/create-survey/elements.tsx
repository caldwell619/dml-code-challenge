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

export const Form = styled.form`
  width: 90%;
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 40%;
  }
`
