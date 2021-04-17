import { buildSchema } from 'graphql'

import { stitchSchema } from '@/graphql-api/util/helpers'
import { MutationResultSchema } from './shared'
import { NotificationsSchema, NotificationsQueries, NotificationsMutations } from './notifications'

const schemas = stitchSchema(NotificationsSchema, MutationResultSchema)
const queries = `#graphql
  type Query {
    ${stitchSchema(NotificationsQueries)}
  }
`
const mutations = `#graphql
  type Mutation {
    ${stitchSchema(NotificationsMutations)}
  }
`

export const schema = buildSchema(stitchSchema(schemas, queries, mutations)) // mutations

export * from '../resolvers'
