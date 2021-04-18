import { FC } from 'react'
import styled from 'styled-components'

import { Input, MobileActionButton, FlexContainer, LoadingSpinner } from 'components/shared'
import { useInput } from 'hooks/useInput'

import { useCreateSurvey } from './use-create-survey'

const CreateSurvey: FC = () => {
  const [firstName, firstNameBind] = useInput('')
  const [lastName, lastNameBind] = useInput('')
  const [emailAddress, emailAddressBind] = useInput('')
  const { createSurvey, isLoading } = useCreateSurvey()

  const handleActionClick = async () => {
    await createSurvey({ firstName, lastName, emailAddress })
  }

  return (
    <Container>
      <Input inputBind={firstNameBind} placeholder='First Name' />
      <Input inputBind={lastNameBind} placeholder='Last Name' />
      <Input inputBind={emailAddressBind} placeholder='Email Address' />
      <MobileActionButton isLoading onClick={handleActionClick}>
        {!isLoading ? <LoadingSpinner /> : 'Create Survey'}
      </MobileActionButton>
    </Container>
  )
}

const Container = styled(FlexContainer)`
  height: 80vh;
  flex-direction: column;
  padding: 2%;
  & > div {
    width: 90%;
  }
`

export default CreateSurvey
