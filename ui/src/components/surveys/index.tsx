import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Routes } from 'router/routes'
import { PageLoading } from 'components/shared'
import EmptyTank from 'components/svg/EmptyTank'

import { CenteredContainer } from './elements'
import { useFetchSurveys } from './hooks/use-fetch-surveys'

const ViewSurveys: FC = () => {
  const { surveys, isLoading } = useFetchSurveys()

  if (isLoading) {
    return (
      <CenteredContainer>
        <PageLoading />
      </CenteredContainer>
    )
  }
  if (!surveys.length) return EmptySurveyResponse

  return (
    <>
      {surveys.map(survey => (
        <div key={survey.id}>{survey.link}</div>
      ))}
    </>
  )
}

const EmptySurveyResponse = (
  <CenteredContainer>
    <EmptyTank height='100px' />
    <h2>Such empty!</h2>
    <Link to={Routes.CreateSurvey}>Create a new survey</Link>
  </CenteredContainer>
)

export default ViewSurveys
