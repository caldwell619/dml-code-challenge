import { buildSchema } from 'graphql'

import { stitchSchema } from '@/graphql-api/util/helpers'
import { MutationResultSchema } from './shared'
import { SurveysSchema, SurveysQueries, SurveysMutations } from './survey'

const schemas = stitchSchema(SurveysSchema, MutationResultSchema)
const queries = `#graphql
  type Query {
    ${stitchSchema(SurveysQueries)}
  }
`
const mutations = `#graphql
  type Mutation {
    ${stitchSchema(SurveysMutations)}
  }
`

export const schema = buildSchema(stitchSchema(schemas, queries, mutations)) // mutations

export * from '../resolvers'
