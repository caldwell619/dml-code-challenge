import { FC, useCallback } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { Routes } from 'router/routes'
import { PageLoading, Layout, Input, Checkbox, DividerBlock } from 'components/shared'
import EmptyTank from 'components/svg/EmptyTank'
import SearchIcon from 'components/svg/Search'
import Survey from 'components/admin-survey'
import { handleErrorRouteCreation } from 'utils'

import { CenteredContainer, Table, SearchContainer, FilterContainer, HeaderOptions } from './elements'
import { useFetchSurveys } from './use-fetch-surveys'

const ViewSurveys: FC = () => {
  const { surveys, areNoSurveys, isLoading, isError, filters, searchTermBind, updateFilter } = useFetchSurveys()

  const handleHideAnswered = useCallback(() => updateFilter('shouldHideAnswered'), [updateFilter])
  const handleHideUnAnswered = useCallback(() => updateFilter('shouldHideNotAnswered'), [updateFilter])

  if (isLoading) return LoadingDisplay

  if (isError) return <Redirect to={handleErrorRouteCreation(true)} />
  if (areNoSurveys) return EmptySurveyResponse

  return (
    <Layout>
      <HeaderOptions>
        <SearchContainer>
          <Input placeholder='Search by name, email or question' Icon={SearchIcon} inputBind={searchTermBind} />
        </SearchContainer>
        <FilterContainer onClick={handleHideAnswered}>
          <Checkbox isChecked={filters.shouldHideAnswered} />
          <div>Hide Answered</div>
        </FilterContainer>
        <FilterContainer onClick={handleHideUnAnswered}>
          <Checkbox isChecked={filters.shouldHideNotAnswered} />
          <div>Hide Not Answered</div>
        </FilterContainer>
      </HeaderOptions>
      <DividerBlock />
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Last Updated</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <>
            {surveys.map(survey => (
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

const LoadingDisplay = (
  <CenteredContainer>
    <PageLoading />
  </CenteredContainer>
)

export default ViewSurveys
