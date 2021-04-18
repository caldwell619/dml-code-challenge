import React, { FC, FunctionComponent, MutableRefObject, useState } from 'react'

import { UseInputBind } from 'hooks/useInput'

import { Container, Input as InputElement, InputContainer, IconContainer, HelperText } from './elements'
import { FlexContainer } from '..'

export const Input: FC<Props> = ({ inputBind = {}, Icon, placeholder, inputRef, helperText }: Props) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <FlexContainer width='100%' direction='column'>
      <Container isFocused={isFocused}>
        {Icon ? (
          <IconContainer>
            <Icon isFocused={isFocused} />
          </IconContainer>
        ) : null}
        <InputContainer>
          <InputElement
            ref={inputRef}
            placeholder={placeholder || ''}
            {...inputBind}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </InputContainer>
      </Container>
      <HelperText isError={helperText?.isError}>{helperText ? helperText.text : ''}</HelperText>
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
  Icon?: FunctionComponent<{ isFocused: boolean }>
  inputRef?: MutableRefObject<HTMLInputElement | null>
}
