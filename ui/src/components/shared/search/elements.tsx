import styled from 'styled-components'

import { FlexContainer } from 'components/shared'

const searchPadding = '2%'

interface SearchContainerProps {
  isFocused: boolean
}
export const SearchContainer = styled(FlexContainer)<SearchContainerProps>`
  justify-content: flex-start;
  border: 1px solid ${({ theme, isFocused }) => (isFocused ? theme.brandColor : '#ffffff80')};
  margin-bottom: 10%;
  border-radius: 10px;
  padding: ${searchPadding};
`
export const SearchIconContainer = styled(FlexContainer)`
  width: 10%;
`

export const SearchInputContainer = styled.div`
  width: 75%;
`

// padding: ${searchPadding};
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding: 2%;
  outline: none;
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
`
