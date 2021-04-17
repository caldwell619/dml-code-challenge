import { stitchSchema } from '@/graphql-api/util/helpers'

const NotificationSchema = `#graphql
  type Notification {
    link: String!
    text: String!
    id: String!
    individualId: String!
  }
`

export const NotificationsQueries = `#graphql
	fetchNotifications: [Notification]
`

export const NotificationsMutations = `#graphql
	deleteNotification(id: String!): MutationResult
`

export const NotificationsSchema = stitchSchema(NotificationSchema)
