import { FC, MouseEvent } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

import Check from 'components/svg/SimpleCheck'
import { defaultButtonStyles, disabledColor, brandColor } from 'constants/styles'

export const Checkbox: FC<Props> = ({ isChecked, handleCheck = () => {}, id, containerStyles, isDisabled }) => (
  <CheckboxContainer id={id} onClick={handleCheck} containerStyles={containerStyles} isDisabled={isDisabled}>
    {isChecked ? <Check fillColor={isDisabled ? disabledColor : brandColor} /> : null}
  </CheckboxContainer>
)

interface CheckboxProps {
  containerStyles?: FlattenSimpleInterpolation
  isDisabled?: boolean
}
const CheckboxContainer = styled.div<CheckboxProps>`
  ${defaultButtonStyles};
  ${({ containerStyles }) => containerStyles || ''}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
  background-color: #363333;
  user-select: none;
  &:hover {
    background-color: #534f4f;
  }
  ${({ isDisabled }) =>
    isDisabled
      ? `
      cursor: not-allowed !important;
      & * {
        cursor: not-allowed !important;
      }
      background-color: ${disabledColor} !important;
  `
      : ''}
`

interface Props {
  isChecked?: boolean
  handleCheck?: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
  id?: string
  containerStyles?: FlattenSimpleInterpolation
  isDisabled?: boolean
}
