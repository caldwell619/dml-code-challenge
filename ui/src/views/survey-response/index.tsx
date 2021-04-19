import { FC, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { parse } from 'query-string'

import { Layout, FixedActionButton, PageLoading, LoadingSpinner, FlexContainer, RadioButton } from 'components/shared'
import { CenteredContainer } from 'views/surveys/elements'
import { handleErrorRouteCreation } from 'utils'

import { useFetchSurvey } from './useFetchSurvey'
import { QuestionContainer, Container, PromptContainer } from './elements'

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

  /** Sends the mutation to answer the survey */
  const handleAnswerSurvey = async () => {
    try {
      await respondToPost({ answer: selectedAnswer, emailAddress, surveyId })
    } catch (error) {
      // empty on purpose, `isRespondError` will have the proper value to determine what the result will be.
    } finally {
      push(handleErrorRouteCreation(isRespondError))
    }
  }

  if (isFetchSurveyLoading) {
    return (
      <CenteredContainer>
        <PageLoading />
      </CenteredContainer>
    )
  }

  // API returns error, then send to error page
  if (isFetchingError) return <Redirect to={handleErrorRouteCreation(true)} />

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
            <RadioButton
              isChecked={choice === selectedAnswer}
              key={choice}
              onClick={() => setSelectedAnswer(choice)}
              label={choice}
              htmlFor='question'
            />
          ))}
          <FixedActionButton onClick={handleAnswerSurvey} disabled={selectedAnswer === ''}>
            {isRespondToSurveyLoading ? <LoadingSpinner /> : 'Submit'}
          </FixedActionButton>
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
