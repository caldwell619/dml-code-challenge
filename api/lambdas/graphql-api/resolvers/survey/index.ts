import { DynamoRecord, Survey } from 'shared-types'
import { query, getItem, putItem, updateItem } from '@caldwell619/common-aws-actions'

import { gsiName, tableName } from '@/graphql-api/constants'
import { Resolver, MutationResult } from '@/graphql-api/interfaces'
import { createCacheKey, useCaching, invalidateCache } from '@/graphql-api/util/caching'

import { surveyBaseKey } from './constants'
import { FetchSurveyArgs, CreateSurveyArgs, SaveSurveyResponseArgs } from './interfaces'
import { generateSurveyKey, generateFirstTimeSurvey } from './helpers'

const surveyCacheKey = 'surveys'
/** Fetches all surveys */
export const fetchSurveys: Resolver<Survey[]> = () =>
  useCaching(
    async () => query<Survey[]>({ partitionKeySearchTerm: surveyBaseKey, indexToQuery: gsiName }),
    createCacheKey(surveyCacheKey, {})
  )

/** Fetches a single survey */
export const fetchSurvey: Resolver<Survey, FetchSurveyArgs> = async ({ emailAddress, surveyId }) =>
  getItem(emailAddress, generateSurveyKey(surveyId))

/** Creates an un-answered survey and generates the link associated with it */
export const createSurvey: Resolver<Survey, CreateSurveyArgs> = async variables => {
  const survey = generateFirstTimeSurvey(variables)
  await putItem(survey)
  invalidateCache(surveyCacheKey)
  return survey
}

export const saveSurveyResponse: Resolver<MutationResult, SaveSurveyResponseArgs> = async ({
  emailAddress,
  surveyId,
  answer
}) => {
  const surveyPrimaryKey: DynamoRecord = {
    groupId: emailAddress,
    individualId: generateSurveyKey(surveyId)
  }
  /**
   * Declaring these as `keyof` ensures that there are no type-o's
   * when declaring the key name of the item to be updated.
   * `keyof` just means one of the options when an `Object.keys` is done on the interface
   */
  const answerKeyName: keyof Survey = 'answer'
  const lastUpdatedKeyName: keyof Survey = 'lastUpdated'

  await Promise.all([
    updateItem(tableName, {
      propertyToUpdate: answerKeyName,
      primaryKey: surveyPrimaryKey,
      newValueOfProperty: answer
    }),
    updateItem(tableName, {
      propertyToUpdate: lastUpdatedKeyName,
      primaryKey: surveyPrimaryKey,
      newValueOfProperty: Date.now()
    })
  ])
  invalidateCache(surveyCacheKey)
  return {
    message: 'Done',
    status: 200
  }
}
