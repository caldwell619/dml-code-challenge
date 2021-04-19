import { FC } from 'react'

import { FlexContainer } from 'components/shared'
import DeleteIcon from 'components/svg/Delete'
import { maxNumberOfAnswers } from 'constants/index'

import { AnswerOptionList, AnswerOptionTitle, AnswerOptionText } from './elements'

const AnswerOptions: FC<Props> = ({ answerChoices, handleDeleteAnswerOption }) => {
  return (
    <>
      <AnswerOptionTitle>
        Answer Options ( {answerChoices.length} / {maxNumberOfAnswers} )
      </AnswerOptionTitle>
      <AnswerOptionList>
        {answerChoices.map((option, index) => (
          <AnswerChoice
            key={option}
            option={option}
            index={index}
            handleDeleteAnswerOption={handleDeleteAnswerOption}
          />
        ))}
      </AnswerOptionList>
    </>
  )
}

const AnswerChoice: FC<AnswerChoiceProps> = ({ option, handleDeleteAnswerOption, index }) => (
  <li>
    <FlexContainer justify='space-between'>
      <AnswerOptionText>{option}</AnswerOptionText>
      <DeleteIcon onClick={() => handleDeleteAnswerOption(index)} />
    </FlexContainer>
  </li>
)

interface DeleteAnswerProps {
  handleDeleteAnswerOption: (index: number) => void
}

interface AnswerChoiceProps extends DeleteAnswerProps {
  option: string
  index: number
}

interface Props extends DeleteAnswerProps {
  answerChoices: string[]
}

export default AnswerOptions
