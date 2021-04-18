import { FC, useState, useCallback } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Input, MobileActionButton, FlexContainer, LoadingSpinner } from 'components/shared'
import { useInput } from 'hooks/useInput'
import { Routes } from 'router/routes'

import { useCreateSurvey } from './use-create-survey'
const validNameRegex = /^[A-Za-z'-]{2,}$/
const validEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

const CreateSurvey: FC = () => {
  const { push } = useHistory()
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [firstName, firstNameBind, { doesPass: doesFirstNamePass }] = useInput('', validNameRegex)
  const [lastName, lastNameBind, { doesPass: doesLastNamePass }] = useInput('', validNameRegex)
  const [emailAddress, emailAddressBind, { doesPass: doesEmailPass }] = useInput('', validEmailRegex)
  const { createSurvey, isLoading } = useCreateSurvey()

  console.log('doesFirstNamePass', doesFirstNamePass)
  console.log('doesLastNamePass', doesLastNamePass)
  console.log('doesEmailPass', doesEmailPass)

  const handleActionClick = async () => {
    setHasSubmitted(true)
    if (doesFirstNamePass && doesLastNamePass && doesEmailPass) {
      await createSurvey({ firstName, lastName, emailAddress })
      push(Routes.Surveys)
    }
  }

  const resetHasSubmitted = useCallback(() => setHasSubmitted(false), [])

  return (
    <Container>
      <Input
        inputBind={firstNameBind}
        placeholder='First Name'
        helperText={{
          isError: hasSubmitted && !doesFirstNamePass,
          text: hasSubmitted && !doesFirstNamePass ? 'Not a valid name' : ''
        }}
        onFocus={resetHasSubmitted}
      />
      <Input
        inputBind={lastNameBind}
        placeholder='Last Name'
        helperText={{
          isError: hasSubmitted && !doesLastNamePass,
          text: hasSubmitted && !doesLastNamePass ? 'Not a valid name' : ''
        }}
        onFocus={resetHasSubmitted}
      />
      <Input
        inputBind={emailAddressBind}
        placeholder='Email Address'
        helperText={{
          isError: hasSubmitted && !doesEmailPass,
          text: hasSubmitted && !doesEmailPass ? 'Not a valid email' : ''
        }}
        onFocus={resetHasSubmitted}
      />
      <MobileActionButton isLoading={isLoading} onClick={handleActionClick}>
        {isLoading ? <LoadingSpinner /> : 'Create Survey'}
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
