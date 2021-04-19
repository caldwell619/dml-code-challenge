import { useContext } from 'react'
import { useMutation, useQueryClient } from 'react-query'

import { Settings } from 'context/Settings'
import { runQuery, client } from 'client'
import { surveyCacheKey } from 'constants/cacheKeys'

import { createSurveyMutation } from './mutations'

export const useCreateSurvey = () => {
  const { isUsingGraphQL } = useContext(Settings)
  const queryCache = useQueryClient()
  const { mutateAsync: createSurvey, isLoading, isError } = useMutation<void, Error, CreateSurveyVariables>(
    variables => (isUsingGraphQL ? createSurveyRunner(variables) : restCreateSurvey(variables)),
    {
      onSuccess() {
        queryCache.invalidateQueries([surveyCacheKey])
      }
    }
  )

  return {
    createSurvey,
    isLoading,
    isError
  }
}

interface CreateSurveyVariables {
  firstName: string
  lastName: string
  emailAddress: string
  question: string
  answerChoices: string[]
}
const createSurveyRunner = async (variables: CreateSurveyVariables): Promise<void> => {
  await runQuery(createSurveyMutation, variables)
}

const restCreateSurvey = async (variables: CreateSurveyVariables) => {
  await client.post('/survey', variables)
}
