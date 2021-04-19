import { useContext } from 'react'
import { useQueryClient, useQuery, useMutation, MutateFunction } from 'react-query'
import { Survey } from 'shared-types'

import { runQuery, client } from 'client'
import { Settings } from 'context/Settings'
import { surveyCacheKey } from 'constants/cacheKeys'

import { fetchSurveyQuery } from './queries'
import { answerSurveyMutation } from './mutations'

export const useFetchSurvey = (variables: FetchSurveyArgs) => {
  const { isUsingGraphQL } = useContext(Settings)
  const queryClient = useQueryClient()
  const { emailAddress, surveyId } = variables
  variables.emailAddress = decodeURIComponent(emailAddress)

  const { data: survey = undefined, isError: isFetchingError, isFetching: isFetchSurveyLoading } = useQuery<Survey>(
    [surveyCacheKey, emailAddress, surveyId],
    () => (isUsingGraphQL ? runQuery<Survey>(fetchSurveyQuery, variables) : restFetchSurvey(variables))
  )

  const { mutateAsync: respondToPost, isLoading: isRespondToSurveyLoading, isError: isRespondError } = useMutation(
    isUsingGraphQL ? respondToSurveyRunner : restSaveResponse,
    {
      onSuccess() {
        queryClient.invalidateQueries('')
      }
    }
  )

  return {
    survey,
    isFetchingError,
    isFetchSurveyLoading,
    isRespondToSurveyLoading,
    respondToPost,
    isRespondError
  }
}

interface FetchSurveyArgs {
  emailAddress: string
  surveyId: string
}

interface RespondToSurveyArgs extends FetchSurveyArgs {
  answer: string
}

const restFetchSurvey = async (variables: FetchSurveyArgs) => {
  const { data } = await client.get<Survey>('/survey', {
    params: variables
  })
  return data
}

const restSaveResponse: MutateFunction<void, Error, RespondToSurveyArgs> = async (variables: RespondToSurveyArgs) => {
  await client.put<Survey>('/survey', variables)
}

const respondToSurveyRunner: MutateFunction<void, Error, RespondToSurveyArgs> = async variables => {
  await runQuery(answerSurveyMutation, variables)
}
