export interface EventBody {
  firstName: string
  lastName: string
  emailAddress: string
  question: string
  answerChoices: string[]
}

export interface Event {
  body: string
  headers: {
    [key: string]: string
  }
}
