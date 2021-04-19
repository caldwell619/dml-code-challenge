import styled from 'styled-components'

import { FlexContainer } from 'components/shared'

export const CenteredContainer = styled(FlexContainer)`
  height: 80vh;
  width: 100%;
  flex-direction: column;
`

export const FilterContainer = styled(FlexContainer)`
  justify-content: flex-start;
  margin: 5% 0;
  & > div {
    margin-right: 5%;
  }
`

export const Table = styled.table`
  width: 100%;
  margin-top: 5%;
  th,
  td {
    padding: 2%;
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
      width: 30%;
    }
  }
`

export const SearchContainer = styled.div`
  padding: 2% 2% 0 2%;
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
`
