import { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

import { mobileBreakpoint } from 'constants/styles'

export const RadioButton: FC<Props> = ({ htmlFor, onClick, isChecked, value, label }) => {
  return (
    <RadioOption isChecked={isChecked}>
      <label htmlFor={htmlFor} onClick={onClick}>
        <input type='radio' value={value} name='question' />
      </label>
      <span onClick={onClick}>{label}</span>
    </RadioOption>
  )
}

interface RadioOptionProps {
  isChecked: boolean
}
const RadioOption = styled.div<RadioOptionProps>`
  margin: 10% 0;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 70%;
  }
  input {
    opacity: 0;
  }
  label {
    background-color: ${({ theme, isChecked }) => (isChecked ? theme.brandColor : '#e1e1e1')};
    border-radius: 50%;
    height: 12px;
    width: 12px;
  }

  span {
    margin-left: 20px;
  }
`

interface Props {
  label: string
  isChecked: boolean
  onClick?: () => void
  htmlFor: string
  value?: InputHTMLAttributes<HTMLInputElement>['value']
}
