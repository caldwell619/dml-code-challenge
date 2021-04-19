import { FC } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { parse } from 'query-string'

import { Routes } from 'router/routes'
import CheckIcon from 'components/svg/Check'

const ResponseConfirmation: FC = () => {
  const { location } = useHistory()
  const { status } = parse(location.search) as QueryParams
  if (status === undefined || (status !== 'success' && status !== 'failure')) return <Redirect to={Routes.Home} />
  return <CheckIcon />
}

type Status = 'success' | 'failure'
interface QueryParams {
  status?: Status
}

export default ResponseConfirmation
