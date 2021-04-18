import { gql } from 'graphql-request'

export const createSurveyMutation = gql`
  mutation createSurvey($firstName: String!, $lastName: String!, $emailAddress: String!) {
    createSurvey(firstName: $firstName, lastName: $lastName, emailAddress: $emailAddress) {
      id
    }
  }
`
