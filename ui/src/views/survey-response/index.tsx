import { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { parse } from 'query-string'

import { Layout, MobileActionButton, PageLoading } from 'components/shared'

import { useFetchSurvey } from './useFetchSurvey'
import { CenteredContainer } from 'views/surveys/elements'

import { QuestionContainer, AnswerOption } from './elements'

const RespondToSurvey: FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const { location } = useHistory()
  const { emailAddress, surveyId } = parse(location.search) as ExpectedQueryStringParams
  if (!emailAddress || !surveyId) throw new Error('nope')
  const { survey, isLoading } = useFetchSurvey({ emailAddress, surveyId })
  if (isLoading) {
    return (
      <CenteredContainer>
        <PageLoading />
      </CenteredContainer>
    )
  }

  return (
    <Layout>
      <QuestionContainer>{survey?.question}</QuestionContainer>
      {survey?.answerChoices.map(choice => (
        <AnswerOption isChecked={choice === selectedAnswer} key={choice}>
          <label htmlFor='question' onClick={() => setSelectedAnswer(choice)}>
            <input type='radio' value={choice} name='question' />
          </label>
          <span onClick={() => setSelectedAnswer(choice)}>{choice}</span>
        </AnswerOption>
      ))}
      <MobileActionButton disabled={selectedAnswer === ''}>Submit</MobileActionButton>
    </Layout>
  )
}

export default RespondToSurvey

interface ExpectedQueryStringParams {
  emailAddress?: string
  surveyId?: string
}
