import { stitchSchema } from '@/graphql-api/util/helpers'

const SurveySchema = `#graphql
  type Survey {
    link: String!
    id: String!
    question: String!
    answerChoices: [String]!
    answer: String
    firstName: String!
    lastName: String!
  }
`

export const SurveysQueries = `#graphql
fetchSurveys: [Survey]
fetchSurvey(emailAddress: String!, surveyId: String!): Survey
`

export const SurveysMutations = `#graphql
createSurvey(firstName: String!, lastName: String!, emailAddress: String!): Survey
saveSurveyResponse(emailAddress: String!, surveyId: String!, answer: String!): MutationResult
`

export const SurveysSchema = stitchSchema(SurveySchema)
