import { putItem, Responder, ResponseBody, bodyParser } from '@caldwell619/common-aws-actions'

import { CreateSurveyArgs, Event } from './interfaces'
import { generateFirstTimeSurvey } from './helpers'

const corsUrl = process.env.CORS_URL
const ResponseHandler = new Responder({ corsUrl, httpMethod: 'POST' })

export const handler = async (event: Event): Promise<ResponseBody> => {
  try {
    const bodyArgs = bodyParser<CreateSurveyArgs>(event.body)
    const survey = generateFirstTimeSurvey(bodyArgs)
    await putItem(survey)
    return ResponseHandler.respond({}, 200)
  } catch (error) {
    console.error('Global error caught: ', error)
    return ResponseHandler.respond(error, error.statusCode || 500)
  }
}
