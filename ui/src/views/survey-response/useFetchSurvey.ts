import { useQuery } from 'react-query'
import { Survey } from 'shared-types'

import { runQuery } from 'client'
import { surveyCacheKey } from 'constants/cacheKeys'

import { fetchSurveyQuery } from './queries'

export const useFetchSurvey = (variables: FetchSurveyArgs) => {
  const { emailAddress, surveyId } = variables
  const { data: survey = null, isError, isFetching: isLoading } = useQuery<Survey>(
    [surveyCacheKey, emailAddress, surveyId],
    () => runQuery<Survey>(fetchSurveyQuery, variables)
  )

  return {
    survey,
    isError,
    isLoading
  }
}

interface FetchSurveyArgs {
  emailAddress: string
  surveyId: string
}
