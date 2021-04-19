import { FC } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { parse } from 'query-string'

import { Routes } from 'router/routes'
import CheckIcon from 'components/svg/Check'
import ExclamationIcon from 'components/svg/Explamation'
import { FlexContainer } from 'components/shared'

import { Title, Subtitle } from './elements'

const ResponseConfirmation: FC = () => {
  const { location } = useHistory()
  const { status } = parse(location.search) as QueryParams
  if (status === undefined || (status !== 'success' && status !== 'failure')) return <Redirect to={Routes.Home} />
  return (
    <FlexContainer height='70vh' direction='column'>
      {status === 'success' ? (
        <>
          <CheckIcon width='20%' />
          <Title>Thank you!</Title>
          <Subtitle>Your response has been recorded.</Subtitle>
          <Subtitle>If you would ever like to change your response, feel free to use this link again.</Subtitle>
        </>
      ) : (
        <>
          <ExclamationIcon width='20%' />
          <Title>Oops</Title>
          <Subtitle>Something went wrong.</Subtitle>
          <Subtitle>If this issue continues, please reach out to someone on the team.</Subtitle>
        </>
      )}
    </FlexContainer>
  )
}

type Status = 'success' | 'failure'
interface QueryParams {
  status?: Status
}

export default ResponseConfirmation
