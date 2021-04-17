export const BaseRecord = `
  groupId: String!
  individualId: String!
  reverseLookupGroupId: String
  reverseLookupIndividualId: String
`

export const MutationResultSchema = `#graphql
  type MutationResult {
    status: Int!
    message: String
  }
`
