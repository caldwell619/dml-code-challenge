import { FC, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Fuse from 'fuse.js'
import { Survey as ISurvey } from 'shared-types'

import { Routes } from 'router/routes'
import { PageLoading, Layout, Input, Checkbox, DividerBlock } from 'components/shared'
import EmptyTank from 'components/svg/EmptyTank'
import SearchIcon from 'components/svg/Search'
import Survey from 'components/admin-survey'
import { useInput } from 'hooks/useInput'

import { CenteredContainer, Table, SearchContainer, FilterContainer } from './elements'
import { useFetchSurveys } from './use-fetch-surveys'

const ViewSurveys: FC = () => {
  const [searchTerm, searchTermBind] = useInput('')
  const [filters, setFilters] = useState<Filters>({ shouldHideAnswered: false, shouldHideNotAnswered: false })
  const { surveys, isLoading } = useFetchSurveys()

  const SurveySearch = useMemo(
    () => new Fuse(surveys, { keys: ['firstName', 'lastName', 'emailAddress'], includeScore: true }),
    [surveys]
  )

  if (isLoading) {
    return (
      <CenteredContainer>
        <PageLoading />
      </CenteredContainer>
    )
  }

  const updateFilter = (targetFilter: keyof Filters): void => {
    setFilters(currentFilters => ({ ...currentFilters, [targetFilter]: !currentFilters[targetFilter] }))
  }

  if (!surveys.length) return EmptySurveyResponse

  const resultingSurveys =
    searchTerm !== ''
      ? handleSearchResults(SurveySearch, searchTerm, filters)
      : handleFiltersWithoutSearch(surveys, filters)

  return (
    <Layout>
      <SearchContainer>
        <Input Icon={SearchIcon} inputBind={searchTermBind} />
      </SearchContainer>
      <FilterContainer onClick={() => updateFilter('shouldHideAnswered')}>
        <Checkbox isChecked={filters.shouldHideAnswered} />
        <div>Hide Answered</div>
      </FilterContainer>
      <FilterContainer onClick={() => updateFilter('shouldHideNotAnswered')}>
        <Checkbox isChecked={filters.shouldHideNotAnswered} />
        <div>Hide Not Answered</div>
      </FilterContainer>
      <DividerBlock />
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <>
            {resultingSurveys.map(survey => (
              <Survey key={survey.id} {...survey} />
            ))}
          </>
        </tbody>
      </Table>
    </Layout>
  )
}

const EmptySurveyResponse = (
  <CenteredContainer>
    <EmptyTank height='100px' />
    <h2>Such empty!</h2>
    <Link to={Routes.CreateSurvey}>Create a new survey</Link>
  </CenteredContainer>
)

const handleSearchResults: SearchForSurveys = (
  FuseSearch,
  searchTerm,
  { shouldHideAnswered, shouldHideNotAnswered }
) => {
  const rawResults = FuseSearch.search(searchTerm)
  const results: ISurvey[] = []
  for (const rawResult of rawResults) {
    const { item, score = 0 } = rawResult
    if (score > 0.4) continue
    if (shouldHideAnswered && item.answer) continue
    if (shouldHideNotAnswered && !item.answer) continue
    results.push(item)
  }
  return results
}

const handleFiltersWithoutSearch: FilterSurveys = (surveys, { shouldHideAnswered, shouldHideNotAnswered }) => {
  if (!shouldHideAnswered && !shouldHideNotAnswered) return surveys
  const results: ISurvey[] = []
  for (const survey of surveys) {
    if (shouldHideAnswered && survey.answer) continue
    if (shouldHideNotAnswered && !survey.answer) continue
    results.push(survey)
  }
  return results
}

interface Filters {
  shouldHideAnswered: false
  shouldHideNotAnswered: false
}
type SearchForSurveys = (FuseSearch: Fuse<ISurvey>, searchTerm: string, filters: Filters) => ISurvey[]
type FilterSurveys = (surveys: ISurvey[], filters: Filters) => ISurvey[]

export default ViewSurveys
