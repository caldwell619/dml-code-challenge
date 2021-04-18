export interface DynamoRecord {
  /** Partition key */
  groupId: string
  /** Range / Sort key */
  individualId: string
  /** GSI partition key */
  reverseLookupGroupId?: string
  /** GSI range / sort key */
  reverseLookupIndividualId?: string
}

export interface Survey extends DynamoRecord {
  link: string
  id: string
  question: string
  answerChoices: string[]
  /** Could be undefined. If present, this means the User has responded to the survey */
  answer?: string
  /** Epoch timestamp ( `Date.now()` ) representation of the last updated time. */
  lastUpdated: number
  /** The first name of the survey recipient */
  firstName: string
  /** The last name of the survey recipient */
  lastName: string
}