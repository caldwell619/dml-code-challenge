import styled from 'styled-components'

import { errorColor } from 'constants/styles'
import { FlexContainer } from 'components/shared'

const searchPadding = '2%'

interface SearchContainerProps {
  isFocused: boolean
}
export const Container = styled(FlexContainer)<SearchContainerProps>`
  justify-content: flex-start;
  border: 1px solid ${({ theme, isFocused }) => (isFocused ? theme.brandColor : '#ffffff80')};
  border-radius: 10px;
  padding: ${searchPadding};
  width: 100%;
`

export const IconContainer = styled(FlexContainer)`
  width: 10%;
`

interface InputContainerProps {
  hasIcon?: boolean
}
export const InputContainer = styled.div<InputContainerProps>`
  width: ${({ hasIcon = false }) => (hasIcon ? '75%' : '98%')};
`

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 2%;
  outline: none;
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
`

interface HelperTextProps {
  isError?: boolean
}
export const HelperText = styled.p<HelperTextProps>`
  color: ${({ theme, isError }) => (isError ? errorColor : theme.primaryTextColor)};
`
