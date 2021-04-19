import styled from 'styled-components'

import { mobileBreakpoint } from 'constants/styles'
import { FlexContainer } from 'components/shared'

export const LogoText = styled.h2`
  margin-top: 40%;
  @media screen and (min-width: ${mobileBreakpoint}) {
    margin-top: 20%;
  }
`
export const LogoContainer = styled(FlexContainer)`
  flex-direction: column;
  width: 65%;
  cursor: pointer;
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 35%;
  }
`
