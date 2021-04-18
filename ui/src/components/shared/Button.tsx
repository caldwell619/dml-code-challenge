import styled from 'styled-components'

import { brandColor } from 'constants/styles'

interface MobileActionButtonProps {
  isFlexContainer?: boolean
  isLoading?: boolean
}
export const MobileActionButton = styled.button<MobileActionButtonProps>`
  position: fixed;
  bottom: 30px;
  left: 10px;
  right: 10px;
  width: 90%;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${({ disabled }) => (disabled ? 'gray' : brandColor)};
  padding: ${({ isLoading }) => (isLoading ? '1%' : '3%')};
  font-size: 1.1em;
  font-weight: bolder;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  ${({ isFlexContainer }) =>
    isFlexContainer
      ? `
  display: flex;
  justify-content: center;
  `
      : ''}
`