import { Responder, ResponseBody, bodyParser } from '@caldwell619/common-aws-actions'

const corsUrl = process.env.CORS_URL
const ResponseHandler = new Responder({ corsUrl, httpMethod: 'POST' })

export const handler = async (event: Event): Promise<ResponseBody> => {
  try {
    const { query, variables, operationName } = bodyParser<EventBody>(event.body)

    if (result.errors) console.error('Errors in resolver', result.errors)
    return ResponseHandler.respond(result, 200)
  } catch (error) {
    console.error('Global error caught: ', error)
    return ResponseHandler.respond(error, error.statusCode || 500)
  }
}
