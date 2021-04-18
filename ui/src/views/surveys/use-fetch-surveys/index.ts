import { useQuery } from 'react-query'
import { Survey } from 'shared-types'

import { runQuery } from 'client'
import { surveyCacheKey } from 'constants/cacheKeys'

import { fetchSurveysQuery } from './queries'

export const useFetchSurveys = () => {
  const { data: surveys = [], isError, isFetching: isLoading } = useQuery(surveyCacheKey, () =>
    runQuery<Survey[]>(fetchSurveysQuery)
  )

  return {
    surveys,
    isError,
    isLoading
  }
}
