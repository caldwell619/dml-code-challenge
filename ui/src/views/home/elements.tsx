import styled from 'styled-components'

import { mobileBreakpoint } from 'constants/styles'

export const Title = styled.h1``
export const Text = styled.p``
export const Container = styled.div`
  margin-top: 2%;
`
export const ActionContainer = styled.div`
  width: 50%;
  padding-top: 2%;
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 30%;
  }
`
