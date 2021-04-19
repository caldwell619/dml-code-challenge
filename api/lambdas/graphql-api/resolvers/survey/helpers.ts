import { Survey } from 'shared-types'
import { v4 as uuid } from 'uuid'

import { applicationUrl } from '@/graphql-api/constants'

import { CreateSurveyArgs } from './interfaces'
import { surveyBaseKey } from './constants'

/** Used for centralized consistency for generating lookup / storage keys */
export const generateSurveyKey = (surveyId: string): string => `${surveyBaseKey}_${surveyId}`

/** Generates and encodes the link to be sent to the User */
export const generateSurveyLink = (surveyId: string, emailAddress: string, expirationTimestamp?: number) => {
  const timestamp = expirationTimestamp ? `&ttl=${expirationTimestamp}` : ''
  const rawLink = `${applicationUrl}respond-to-survey?surveyId=${surveyId}&emailAddress=${emailAddress}${timestamp}`
  return encodeURI(rawLink)
}

export const generateFirstTimeSurvey = (variables: CreateSurveyArgs): Survey => {
  const { emailAddress } = variables
  const surveyId = uuid()
  return {
    groupId: emailAddress,
    individualId: generateSurveyKey(surveyId),
    reverseLookupGroupId: surveyBaseKey,
    reverseLookupIndividualId: [emailAddress, surveyId].join('_'),
    lastUpdated: Date.now(),
    link: generateSurveyLink(surveyId, emailAddress),
    id: surveyId,
    ...variables
  }
}
