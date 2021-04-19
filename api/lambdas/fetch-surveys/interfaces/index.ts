export interface ParsedQueryStringParams {
  emailAddress?: string
  surveyId?: string
}

export interface Event {
  body: string
  headers: {
    [key: string]: string
  }
  queryStringParams: Record<string, unknown>
}
