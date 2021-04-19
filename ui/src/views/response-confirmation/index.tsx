import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { parse } from 'query-string'

import CheckIcon from 'components/svg/Check'
import ExclamationIcon from 'components/svg/Exclamation'
import { FlexContainer } from 'components/shared'

import { Title, Subtitle } from './elements'

const ResponseConfirmation: FC = () => {
  const { location } = useHistory()
  const { status } = parse(location.search) as QueryParams

  return (
    <FlexContainer height='70vh' direction='column'>
      {status === 'success' ? (
        <StatusDisplay
          isSuccessful
          title='Thank you!'
          subtitleOne='Your response has been recorded.'
          subtitleTwo='If you would ever like to change your response, feel free to use this link again.'
        />
      ) : (
        <StatusDisplay
          isSuccessful={false}
          title='Oops'
          subtitleOne='Something went wrong.'
          subtitleTwo='If this issue continues, please reach out to someone on the team.'
        />
      )}
    </FlexContainer>
  )
}

const iconWidth = '70px'
const StatusDisplay: FC<StatusDisplayProps> = ({ isSuccessful, title, subtitleOne, subtitleTwo }) => (
  <>
    {isSuccessful ? <CheckIcon width={iconWidth} /> : <ExclamationIcon width={iconWidth} />}
    <Title>{title}</Title>
    <Subtitle>{subtitleOne}</Subtitle>
    <Subtitle>{subtitleTwo}</Subtitle>
  </>
)

interface StatusDisplayProps {
  isSuccessful: boolean
  title: string
  subtitleOne: string
  subtitleTwo: string
}
type Status = 'success' | 'failure'
interface QueryParams {
  status?: Status
}

export default ResponseConfirmation
