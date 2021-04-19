import styled from 'styled-components'

import { mobileBreakpoint } from 'constants/styles'

export const PromptContainer = styled.div`
  font-size: 1.6em;
  margin-bottom: 5%;
  @media screen and (min-width: ${mobileBreakpoint}) {
    margin-bottom: 3%;
    font-size: 2em;
  }
  padding: 8% 0;
`

export const QuestionContainer = styled.div`
  font-size: 1.4em;
  margin-bottom: 10%;
  @media screen and (min-width: ${mobileBreakpoint}) {
    margin-bottom: 0;
    font-size: 1.7em;
  }
`

export const Container = styled.div`
  width: 90%;
  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 70%;
  }
`

interface AnswerOptionProps {
  isChecked: boolean
}
export const AnswerOption = styled.div<AnswerOptionProps>`
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
