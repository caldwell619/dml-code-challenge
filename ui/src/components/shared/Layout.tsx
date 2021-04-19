import { FC } from 'react'
import styled from 'styled-components'

import { mobileBreakpoint } from 'constants/styles'

export const PageLayout = styled.div`
  padding: 3%;
  @media screen and (min-width: ${mobileBreakpoint}) {
    padding: 1% 3%;
  }
`

export const PageTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 1%;
  margin: 0;
`

export const DividerBlock = styled.div`
  height: 1px;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.primaryTextColor};
  margin: 1em 0;
  padding: 0;
`

export const Layout: FC = ({ children }) => <PageLayout>{children}</PageLayout>
