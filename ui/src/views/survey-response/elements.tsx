import styled from 'styled-components'

export const QuestionContainer = styled.div`
  font-size: 2em;
  padding: 8% 0;
`

interface AnswerOptionProps {
  isChecked: boolean
}
export const AnswerOption = styled.div<AnswerOptionProps>`
  margin: 6% 0;
  font-size: 1.2em;
  display: flex;
  align-items: center;
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
