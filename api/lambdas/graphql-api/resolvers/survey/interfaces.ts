export interface FetchSurveyArgs {
  emailAddress: string
  surveyId: string
}

export interface CreateSurveyArgs {
  firstName: string
  lastName: string
  emailAddress: string
  question: string
  answerChoices: string[]
}

export interface SaveSurveyResponseArgs {
  emailAddress: string
  surveyId: string
  answer: string
}
