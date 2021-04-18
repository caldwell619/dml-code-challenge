import { useMutation, useQueryClient } from 'react-query'

import { runQuery } from 'client/graphql'

import { createSurveyMutation } from './mutations'

export const useCreateSurvey = () => {
  const queryCache = useQueryClient()
  const { mutateAsync: createSurvey, isLoading, isError } = useMutation<void, Error, CreateSurveyVariables>(
    variables => createSurveyRunner(variables),
    {
      onSuccess() {
        queryCache.invalidateQueries([''])
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
}
const createSurveyRunner = async (variables: CreateSurveyVariables): Promise<void> => {
  await runQuery(createSurveyMutation, variables)
}
