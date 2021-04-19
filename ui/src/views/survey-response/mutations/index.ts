import { gql } from 'graphql-request'

export const answerSurveyMutation = gql`
  mutation saveSurveyResponse($emailAddress: String!, $surveyId: String!, $answer: String!) {
    saveSurveyResponse(emailAddress: $emailAddress, surveyId: $surveyId, answer: $answer) {
      message
    }
  }
`
