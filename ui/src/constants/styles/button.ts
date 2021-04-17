import { css } from 'styled-components'

export const defaultButtonStyles = css`
  font-weight: bold;
  padding-top: 1px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  text-align: center;
  border-radius: 3px;
  font-size: 14px;
  &:hover,
  *:hover {
    cursor: pointer;
    * {
      cursor: pointer;
    }
  }
`
