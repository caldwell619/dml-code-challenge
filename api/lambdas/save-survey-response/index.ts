import { Responder, ResponseBody, bodyParser, updateItem } from '@caldwell619/common-aws-actions'
import { DynamoRecord, Survey } from 'shared-types'

import { Event, EventBody } from './interfaces'
import { generateSurveyKey, tableName } from './constants'

const corsUrl = process.env.CORS_URL
const ResponseHandler = new Responder({ corsUrl, httpMethod: 'PUT' })

export const handler = async (event: Event): Promise<ResponseBody> => {
  try {
    const { emailAddress, surveyId, answer } = bodyParser<EventBody>(event.body)
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

    return ResponseHandler.respond({}, 200)
  } catch (error) {
    console.error('Global error caught: ', error)
    return ResponseHandler.respond(error, error.statusCode || 500)
  }
}
