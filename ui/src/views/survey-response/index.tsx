import { FC, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { parse } from 'query-string'

import { Layout, MobileActionButton, PageLoading, LoadingSpinner, FlexContainer } from 'components/shared'
import { Routes } from 'router/routes'
import { CenteredContainer } from 'views/surveys/elements'
import { handleRouteCreation } from 'utils'

import { useFetchSurvey } from './useFetchSurvey'
import { QuestionContainer, AnswerOption, Container, PromptContainer } from './elements'

const RespondToSurvey: FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const { location, push } = useHistory()
  const { emailAddress, surveyId } = parse(location.search) as ExpectedQueryStringParams
  if (!emailAddress || !surveyId) throw new Error('nope')
  const {
    survey,
    isFetchSurveyLoading,
    isFetchingError,
    respondToPost,
    isRespondToSurveyLoading,
    isRespondError
  } = useFetchSurvey({
    emailAddress,
    surveyId
  })

  const handleAnswerSurvey = async () => {
    await respondToPost({ answer: selectedAnswer, emailAddress, surveyId })
    push(`${Routes.ResponseConfirmation}?status=${isRespondError ? 'failure' : 'success'}`)
  }

  if (isFetchSurveyLoading) {
    return (
      <CenteredContainer>
        <PageLoading />
      </CenteredContainer>
    )
  }

  // API returns error, then send to error page
  if (isFetchingError) return <Redirect to={handleRouteCreation(true)} />

  return (
    <Layout>
      <FlexContainer>
        <Container>
          <PromptContainer>
            {survey?.firstName ? `Hi, ${survey?.firstName}. ` : ''}Thanks for taking the time to respond to the survey.
            <br />
            We have just one question.
          </PromptContainer>
          <QuestionContainer>{survey?.question}</QuestionContainer>
          {survey?.answerChoices.map(choice => (
            <AnswerOption isChecked={choice === selectedAnswer} key={choice}>
              <label htmlFor='question' onClick={() => setSelectedAnswer(choice)}>
                <input type='radio' value={choice} name='question' />
              </label>
              <span onClick={() => setSelectedAnswer(choice)}>{choice}</span>
            </AnswerOption>
          ))}
          <MobileActionButton onClick={handleAnswerSurvey} disabled={selectedAnswer === ''}>
            {isRespondToSurveyLoading ? <LoadingSpinner /> : 'Submit'}
          </MobileActionButton>
        </Container>
      </FlexContainer>
    </Layout>
  )
}

export default RespondToSurvey

interface ExpectedQueryStringParams {
  emailAddress?: string
  surveyId?: string
}
