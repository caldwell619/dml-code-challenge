import styled from 'styled-components'

import { errorColor } from 'constants/styles'
import { FlexContainer } from 'components/shared'

const searchPadding = '2%'

interface SearchContainerProps {
  isFocused: boolean
  isError?: boolean
}
export const Container = styled(FlexContainer)<SearchContainerProps>`
  justify-content: flex-start;
  border: 1px solid
    ${({ theme, isFocused, isError }) => {
      if (isError) return errorColor
      return isFocused ? theme.brandColor : '#ffffff80'
    }};
  border-radius: 10px;
  padding: ${searchPadding};
  width: 100%;
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
`

interface IconContainerProps {
  isClickable?: boolean
}
export const IconContainer = styled(FlexContainer)<IconContainerProps>`
  width: 10%;
  ${({ isClickable }) => (isClickable ? 'cursor: pointer; & * { cursor: pointer; }' : '')}
`

interface InputContainerProps {
  hasIcon?: boolean
}
export const InputContainer = styled.div<InputContainerProps>`
  width: ${({ hasIcon = false }) => (hasIcon ? '75%' : '98%')};
`

export const Input = styled.input`
  width: 90%;
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
  font-size: 0.8em;
  margin-top: 1%;
  width: 100%;
  height: 10px;
`
