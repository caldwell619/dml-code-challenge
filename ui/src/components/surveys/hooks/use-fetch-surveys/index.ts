import { useQuery } from 'react-query'
import { Survey } from 'shared-types'

import { runQuery } from 'client'

import { fetchSurveysQuery } from './queries'

export const useFetchSurveys = () => {
  const { data: surveys = [], isError, isFetching: isLoading } = useQuery('', () =>
    runQuery<Survey[]>(fetchSurveysQuery)
  )
  console.log('surveys', surveys)
  return {
    surveys,
    isError,
    isLoading
  }
}
