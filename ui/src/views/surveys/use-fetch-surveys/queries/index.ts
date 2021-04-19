import { gql } from 'graphql-request'

export const fetchSurveysQuery = gql`
  query fetchSurveys {
    fetchSurveys {
      id
      link
      firstName
      lastName
      question
      answer
    }
  }
`
