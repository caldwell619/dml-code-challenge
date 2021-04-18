import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Fuse from 'fuse.js'
import { Survey as ISurvey } from 'shared-types'

import { Routes } from 'router/routes'
import { PageLoading, Layout, Input } from 'components/shared'
import EmptyTank from 'components/svg/EmptyTank'
import SearchIcon from 'components/svg/Search'
import Survey from 'components/admin-survey'
import { useInput } from 'hooks/useInput'

import { CenteredContainer, Table, SearchContainer } from './elements'
import { useFetchSurveys } from './use-fetch-surveys'

const ViewSurveys: FC = () => {
  const [searchTerm, searchTermBind] = useInput('')
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
  if (!surveys.length) return EmptySurveyResponse
  console.log('searchTerm', searchTerm)
  const resultingSurveys = searchTerm !== '' ? handleSearchResults(SurveySearch, searchTerm) : surveys

  return (
    <Layout>
      <SearchContainer>
        <Input Icon={() => <SearchIcon />} inputBind={searchTermBind} />
      </SearchContainer>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Answered?</th>
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

const handleSearchResults: SearchForSurveys = (FuseSearch, searchTerm) => {
  console.log('running')
  const rawResults = FuseSearch.search(searchTerm)
  const results: ISurvey[] = []
  for (const rawResult of rawResults) {
    const { item, score = 0 } = rawResult
    if (score < 0.4) results.push(item)
  }
  return results
}
type SearchForSurveys = (FuseSearch: Fuse<ISurvey>, searchTerm: string) => ISurvey[]

export default ViewSurveys
