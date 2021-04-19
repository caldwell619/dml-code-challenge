import { FC, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { Input, MobileActionButton, FlexContainer, LoadingSpinner, Layout } from 'components/shared'
import { useInput } from 'hooks/useInput'
import { Routes } from 'router/routes'
import PlusIcon from 'components/svg/Plus'
import DeleteIcon from 'components/svg/Delete'

import { Container, AnswerOptionList, AnswerOptionTitle, Form } from './elements'

import { useCreateSurvey } from './use-create-survey'
const validNameRegex = /^[A-Za-z'-]{2,}$/
const validQuestionRegex = /^[\S\s]*$/
const validEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
const maxNumberOfAnswers = 4

const CreateSurvey: FC = () => {
  const { push } = useHistory()
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [answerChoices, setAnswerChoices] = useState<string[]>([])
  const [firstName, firstNameBind, { doesPass: doesFirstNamePass }] = useInput('', validNameRegex)
  const [lastName, lastNameBind, { doesPass: doesLastNamePass }] = useInput('', validNameRegex)
  const [emailAddress, emailAddressBind, { doesPass: doesEmailPass }] = useInput('', validEmailRegex)
  const [question, questionToAskBind, { doesPass: doesQuestionPass }] = useInput('', validQuestionRegex)
  const [answerOption, answerOptionBind, { doesPass: doesAnswerPass, resetValue: resetAnswer }] = useInput(
    '',
    validQuestionRegex
  )
  const { createSurvey, isLoading } = useCreateSurvey()

  const handleActionClick = async () => {
    setHasSubmitted(true)
    if (
      doesFirstNamePass &&
      doesLastNamePass &&
      doesEmailPass &&
      doesQuestionPass &&
      answerChoices.length === maxNumberOfAnswers
    ) {
      await createSurvey({ firstName, lastName, emailAddress, question, answerChoices })
      push(Routes.Surveys)
    }
  }

  const resetHasSubmitted = useCallback(() => setHasSubmitted(false), [])
  const addAnswerOption = useCallback(
    () =>
      setAnswerChoices(currentOptions => {
        if (!doesAnswerPass) return currentOptions
        if (currentOptions.length + 1 > maxNumberOfAnswers) return currentOptions
        resetAnswer()
        // Using a set is an eas way to ensure uniqueness across the array
        return [...new Set([...currentOptions, answerOption])]
      }),
    [answerOption, doesAnswerPass, resetAnswer]
  )
  const handleDeleteAnswerOption = useCallback((index: number) => {
    setAnswerChoices(currentOptions => {
      const mutableOptions = [...currentOptions]
      mutableOptions.splice(index, 1)
      return mutableOptions
    })
  }, [])

  return (
    <Layout>
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
        <Input
          inputBind={questionToAskBind}
          placeholder='Question to Ask'
          helperText={{
            isError: hasSubmitted && !doesQuestionPass,
            text: hasSubmitted && !doesQuestionPass ? 'Not a valid question' : ''
          }}
          onFocus={resetHasSubmitted}
        />
        <Form
          onSubmit={e => {
            e.preventDefault()
            addAnswerOption()
          }}
        >
          <Input
            inputBind={answerOptionBind}
            placeholder='Answer Option'
            Icon={PlusIcon}
            onIconClick={addAnswerOption}
          />
        </Form>
        <AnswerOptionTitle>
          Answer Options ( {answerChoices.length} / {maxNumberOfAnswers} )
        </AnswerOptionTitle>
        <AnswerOptionList>
          {answerChoices.map((option, index) => (
            <li key={option}>
              <FlexContainer justify='space-between'>
                <div>{option}</div>
                <DeleteIcon onClick={() => handleDeleteAnswerOption(index)} />
              </FlexContainer>
            </li>
          ))}
        </AnswerOptionList>
        <MobileActionButton isLoading={isLoading} onClick={handleActionClick}>
          {isLoading ? <LoadingSpinner /> : 'Create Survey'}
        </MobileActionButton>
      </Container>
    </Layout>
  )
}

export default CreateSurvey
