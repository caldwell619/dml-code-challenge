import { FC, useState } from 'react'
import { Survey } from 'shared-types'

import { FlexContainer } from 'components/shared'
import Toast from 'components/shared/Toast'
import CheckIcon from 'components/svg/Check'
import XIcon from 'components/svg/X'
import CopyIcon from 'components/svg/Copy'

const AdminSurvey: FC<Props> = ({ firstName, lastName, answer, link }) => {
  const [isShown, setIsShown] = useState(false)
  const handleCopy = (link: string): void => {
    copyToClipBoard(link)
    setIsShown(true)
  }
  return (
    <>
      <tr>
        <td aria-label='First Name'>{firstName}</td>
        <td aria-label='Last Name'>{lastName}</td>
        <td aria-label='Answered?'>{answer ? <CheckIcon /> : <XIcon />}</td>
        <td aria-label='Link' onClick={() => handleCopy(link)}>
          <CopyIcon />
        </td>
        <td />
      </tr>
      <Toast isShown={isShown} setIsShown={setIsShown}>
        <FlexContainer height='100%'>Copied to clipboard</FlexContainer>
      </Toast>
    </>
  )
}

interface Props extends Survey {}

export default AdminSurvey

const copyToClipBoard = (textToCopy: string) => {
  const tempInput = document.createElement('input')
  if (!textToCopy) throw new Error('Nothing to copy')
  tempInput.value = textToCopy
  tempInput.setAttribute('type', 'text')
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand('copy')
  tempInput.remove()
}
