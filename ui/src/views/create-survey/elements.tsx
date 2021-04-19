import styled from 'styled-components'

import { desktopBreakpoint, mobileBreakpoint } from 'constants/styles'
import { FlexContainer } from 'components/shared'

export const Container = styled(FlexContainer)`
  flex-direction: column;
  justify-content: flex-start;
  padding: 2%;
  & > div {
    width: 100%;
    @media screen and (min-width: ${mobileBreakpoint}) {
      height: 100%;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-gap: 0.5%;
  grid-template-columns: repeat(1, 100%);
  grid-template-areas: 'top';
  @media screen and (min-width: ${mobileBreakpoint}) {
    grid-gap: 5%;
    grid-template-areas: 'left right';
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${desktopBreakpoint}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
