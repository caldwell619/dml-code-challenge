import React, { FC, FunctionComponent, MutableRefObject, useState } from 'react'

import { UseInputBind } from 'hooks/useInput'

import { Container, Input as InputElement, InputContainer, IconContainer, HelperText } from './elements'
import { FlexContainer } from '..'

export const Input: FC<Props> = ({
  inputBind = {},
  Icon,
  placeholder,
  inputRef,
  helperText,
  onFocus = () => {},
  onIconClick = () => {}
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const handleOnFocus = () => {
    setIsFocused(true)
    onFocus()
  }
  return (
    <FlexContainer width='100%' direction='column'>
      <Container isError={helperText?.isError} isFocused={isFocused}>
        {Icon ? (
          <IconContainer isClickable={!!onIconClick} onClick={onIconClick}>
            <Icon isFocused={isFocused} />
          </IconContainer>
        ) : null}
        <InputContainer>
          <InputElement
            ref={inputRef}
            placeholder={placeholder || ''}
            {...inputBind}
            onFocus={handleOnFocus}
            onBlur={() => setIsFocused(false)}
          />
        </InputContainer>
      </Container>
      <HelperText isError={helperText?.isError}>{helperText?.text || ''}</HelperText>
    </FlexContainer>
  )
}

interface Props {
  helperText?: {
    isError?: boolean
    text: string
  }
  inputBind?: UseInputBind | {}
  placeholder?: string
  Icon?: FunctionComponent<{ isFocused?: boolean } | undefined>
  inputRef?: MutableRefObject<HTMLInputElement | null>
  onFocus?: () => void
  onIconClick?: () => void
}
