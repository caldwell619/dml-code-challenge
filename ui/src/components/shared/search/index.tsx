import React, { FC, memo, useState } from 'react'

import SearchIcon from 'components/svg/Search'
import { UseInputBind } from 'hooks/useInput'

import { SearchContainer, SearchIconContainer, SearchInput, SearchInputContainer } from './elements'

const Search: FC<Props> = ({ searchTermBind }: Props) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <SearchContainer isFocused={isFocused}>
      <SearchIconContainer>
        <SearchIcon color={isFocused ? undefined : 'white'} />
      </SearchIconContainer>
      <SearchInputContainer>
        <SearchInput {...searchTermBind} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
      </SearchInputContainer>
    </SearchContainer>
  )
}

interface Props {
  searchTermBind: UseInputBind
}

export default memo(Search)
