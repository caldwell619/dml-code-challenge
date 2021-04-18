import styled from 'styled-components'

import { FlexContainer } from 'components/shared'

export const CenteredContainer = styled(FlexContainer)`
  height: 80vh;
  width: 100%;
  flex-direction: column;
`

export const Table = styled.table`
  width: 100%;
  th,
  td {
    padding: 12px;
  }

  @media screen and (max-width: 600px) {
    thead {
      display: none;
    }

    tr {
      &:last-child {
        margin-bottom: 100px;
        color: red !important;
      }
    }

    td {
      display: flex;
    }

    td::before {
      content: attr(aria-label);
      width: 40%;
    }
  }
`

export const SearchContainer = styled.div`
  position: sticky;
  top: 53px;
`
