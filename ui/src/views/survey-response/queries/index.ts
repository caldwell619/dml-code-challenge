import { gql } from 'graphql-request'

export const fetchSurveyQuery = gql`
  query fetchSurvey($emailAddress: String!, $surveyId: String!) {
    fetchSurvey(emailAddress: $emailAddress, surveyId: $surveyId) {
      id
      question
      answerChoices
      answer
      firstName
      lastName
    }
  }
`
