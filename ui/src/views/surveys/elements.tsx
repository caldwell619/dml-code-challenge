import styled from 'styled-components'

import { mobileBreakpoint } from 'constants/styles'
import { FlexContainer } from 'components/shared'

export const HeaderOptions = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;
  & > div {
    width: 100%;
  }
  @media screen and (min-width: ${mobileBreakpoint}) {
    flex-direction: row;
  }
`

export const CenteredContainer = styled(FlexContainer)`
  height: 80vh;
  width: 100%;
  flex-direction: column;
`

export const FilterContainer = styled(FlexContainer)`
  justify-content: flex-start;
  margin: 5% 0;
  cursor: pointer;
  & > div {
    margin-right: 5%;
  }
  @media screen and (min-width: ${mobileBreakpoint}) {
    margin: 1.5% 0;
    width: 20% !important;
    & > div {
      margin-right: 4%;
    }
  }
`

export const Table = styled.table`
  width: 100%;
  margin-top: 5%;
  border-collapse: collapse;
  th,
  td {
    padding: 2%;
  }
  @media screen and (min-width: ${mobileBreakpoint}) {
    margin-top: 3%;
    th,
    td {
      padding: 0.8%;
    }
    tr {
      border-bottom: 1px solid white;
    }
  }
  th {
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    thead {
      display: none;
    }

    td {
      display: flex;
      & div {
        width: 60%;
      }
    }

    td::before {
      content: attr(aria-label);
      width: 35%;
    }
  }
`

export const SearchContainer = styled.div`
  padding: 2% 2% 0 2%;
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 80% !important;
    & > div {
      width: 50%;
    }
  }
`
