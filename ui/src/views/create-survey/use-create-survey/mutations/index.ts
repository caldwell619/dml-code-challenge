import { gql } from 'graphql-request'

export const createSurveyMutation = gql`
  mutation createSurvey(
    $firstName: String!
    $lastName: String!
    $emailAddress: String!
    $question: String!
    $answerChoices: [String]!
  ) {
    createSurvey(
      firstName: $firstName
      lastName: $lastName
      emailAddress: $emailAddress
      question: $question
      answerChoices: $answerChoices
    ) {
      id
    }
  }
`
