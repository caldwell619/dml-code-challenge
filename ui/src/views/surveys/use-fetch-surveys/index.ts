import { useCallback, useMemo, useState, useContext } from 'react'
import Fuse from 'fuse.js'
import { useQuery } from 'react-query'
import { Survey } from 'shared-types'

import { Settings } from 'context/Settings'
import { runQuery, client } from 'client'
import { surveyCacheKey } from 'constants/cacheKeys'
import { useInput } from 'hooks/useInput'

import { fetchSurveysQuery } from './queries'

export const useFetchSurveys = () => {
  const { isUsingGraphQL } = useContext(Settings)
  const [searchTerm, searchTermBind] = useInput('')
  const [filters, setFilters] = useState<Filters>({ shouldHideAnswered: false, shouldHideNotAnswered: false })

  const { data: surveys = [], isError, isFetching: isLoading } = useQuery(surveyCacheKey, () =>
    isUsingGraphQL ? runQuery<Survey[]>(fetchSurveysQuery) : restFetchSurveys()
  )

  const SurveySearch = useMemo(
    () => new Fuse(surveys, { keys: ['firstName', 'lastName', 'emailAddress', 'question'], includeScore: true }),
    [surveys]
  )

  const updateFilter = useCallback((targetFilter: keyof Filters) => {
    setFilters(currentFilters => {
      const newValue = !currentFilters[targetFilter]
      const oppositeFilterKey = filterOppositeKeyMap[targetFilter]
      // Checking to see if both filters would be enabled
      if (newValue && currentFilters[oppositeFilterKey]) {
        // If both enabled, turn the opposite of the one being updated to false.
        return ({ [filterOppositeKeyMap[targetFilter]]: false, [targetFilter]: newValue } as unknown) as Filters
      }
      return { ...currentFilters, [targetFilter]: !currentFilters[targetFilter] }
    })
  }, [])

  const resultingSurveys =
    searchTerm !== ''
      ? handleSearchResults(SurveySearch, searchTerm, filters)
      : handleFiltersWithoutSearch(surveys, filters)

  return {
    SurveySearch,
    surveys: resultingSurveys,
    isError,
    isLoading,
    searchTermBind,
    updateFilter,
    filters,
    /** If the API returns 0, then show the empty screen. This prevents the search from mistakenly showing null */
    areNoSurveys: surveys.length === 0
  }
}

/** Searches the list of surveys, and returns a sub set that match the search */
const handleSearchResults: SearchForSurveys = (
  FuseSearch,
  searchTerm,
  { shouldHideAnswered, shouldHideNotAnswered }
) => {
  const rawResults = FuseSearch.search(searchTerm)
  const results: Survey[] = []
  for (const rawResult of rawResults) {
    const { item, score = 0 } = rawResult
    if (score > 0.4) continue
    if (shouldHideAnswered && item.answer) continue
    if (shouldHideNotAnswered && !item.answer) continue
    results.push(item)
  }
  return results
}

/** Applies the filter when the search is empty */
const handleFiltersWithoutSearch: FilterSurveys = (surveys, { shouldHideAnswered, shouldHideNotAnswered }) => {
  if (!shouldHideAnswered && !shouldHideNotAnswered) return surveys
  const results: Survey[] = []
  for (const survey of surveys) {
    if (shouldHideAnswered && survey.answer) continue
    if (shouldHideNotAnswered && !survey.answer) continue
    results.push(survey)
  }
  return results
}

/** Map holding the opposite of each filter. This is to toggle the other, if both are enabled.
 * The alternative would be to allow the user to filter both answered, and non answered which doesn't seem to be of any use.
 * */
const filterOppositeKeyMap: Record<keyof Filters, keyof Filters> = {
  shouldHideAnswered: 'shouldHideNotAnswered',
  shouldHideNotAnswered: 'shouldHideAnswered'
}

const restFetchSurveys = async (): Promise<Survey[]> => {
  const { data } = await client.get<Survey[]>('/survey')
  return data
}

interface Filters {
  shouldHideAnswered: false
  shouldHideNotAnswered: false
}
type SearchForSurveys = (FuseSearch: Fuse<Survey>, searchTerm: string, filters: Filters) => Survey[]
type FilterSurveys = (surveys: Survey[], filters: Filters) => Survey[]
