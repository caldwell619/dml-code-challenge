import { useQueryClient, useQuery, useMutation, MutateFunction } from 'react-query'
import { Survey } from 'shared-types'

import { runQuery } from 'client'
import { surveyCacheKey } from 'constants/cacheKeys'

import { fetchSurveyQuery } from './queries'
import { answerSurveyMutation } from './mutations'

export const useFetchSurvey = (variables: FetchSurveyArgs) => {
  const queryClient = useQueryClient()
  const { emailAddress, surveyId } = variables

  const { data: survey = null, isError, isFetching: isFetchSurveyLoading } = useQuery<Survey>(
    [surveyCacheKey, emailAddress, surveyId],
    () => runQuery<Survey>(fetchSurveyQuery, variables)
  )

  const { mutate: respondToPost, isLoading: isRespondToSurveyLoading } = useMutation(respondToSurveyRunner, {
    onSuccess() {
      queryClient.invalidateQueries('')
    }
  })

  return {
    survey,
    isError,
    isFetchSurveyLoading,
    isRespondToSurveyLoading,
    respondToPost
  }
}

interface FetchSurveyArgs {
  emailAddress: string
  surveyId: string
}

interface RespondToSurveyArgs extends FetchSurveyArgs {
  answer: string
}

const respondToSurveyRunner: MutateFunction<void, Error, RespondToSurveyArgs> = async variables => {
  await runQuery(answerSurveyMutation, variables)
}
