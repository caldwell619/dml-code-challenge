export interface EventBody {
  emailAddress: string
  surveyId: string
  answer: string
}

export interface Event {
  body: string
  headers: {
    [key: string]: string
  }
}
