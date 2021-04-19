import { Responder, ResponseBody, query, getItem } from '@caldwell619/common-aws-actions'
import { Survey } from 'shared-types'

import { gsiName, surveyBaseKey, generateSurveyKey } from '@/fetch-surveys/constants'
import { Event, ParsedQueryStringParams } from './interfaces'

const corsUrl = process.env.CORS_URL
const ResponseHandler = new Responder({ corsUrl, httpMethod: 'GET' })

export const handler = async ({ queryStringParameters }: Event): Promise<ResponseBody> => {
  const isSearchingForOneSurvey = queryStringParameters?.surveyId && queryStringParameters?.emailAddress
  let result: Survey[] | Survey
  try {
    if (isSearchingForOneSurvey) {
      const { emailAddress, surveyId } = queryStringParameters as ParsedQueryStringParams
      result = await getItem(emailAddress, generateSurveyKey(surveyId))
    } else {
      result = await query<Survey[]>({ partitionKeySearchTerm: surveyBaseKey, indexToQuery: gsiName })
    }
    return ResponseHandler.respond(result, 200)
  } catch (error) {
    console.error('Global error caught: ', error)
    return ResponseHandler.respond(error, error.statusCode || 500)
  }
}
