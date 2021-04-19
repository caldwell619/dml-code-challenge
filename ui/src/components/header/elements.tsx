import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { FlexContainer } from 'components/shared'
import { navBarHeight, mobileBreakpoint } from 'constants/styles'

export const HeaderContainer = styled(FlexContainer)`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: ${navBarHeight};
  background-color: black;
  justify-content: flex-start;
`

export const LinkContainer = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 20%;
  }
  cursor: pointer;
  color: ${({ theme }) => theme.primaryTextColor};
`
