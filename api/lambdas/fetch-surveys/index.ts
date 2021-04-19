import { Responder, ResponseBody } from '@caldwell619/common-aws-actions'

import { Event } from './interfaces'

const corsUrl = process.env.CORS_URL
const ResponseHandler = new Responder({ corsUrl, httpMethod: 'GET' })

export const handler = async ({ queryStringParams }: Event): Promise<ResponseBody> => {
  console.log(queryStringParams)
  try {
    return ResponseHandler.respond({}, 200)
  } catch (error) {
    console.error('Global error caught: ', error)
    return ResponseHandler.respond(error, error.statusCode || 500)
  }
}
