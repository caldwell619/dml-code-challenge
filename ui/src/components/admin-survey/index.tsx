import { FC, useState, useMemo } from 'react'
import { Survey } from 'shared-types'
import format from 'date-fns/format'

import { Toast, FlexContainer, DividerBlock } from 'components/shared'
import XIcon from 'components/svg/X'
import CopyIcon from 'components/svg/Copy'

const AdminSurvey: FC<Props> = ({ firstName, lastName, question, answer, lastUpdated, link }) => {
  const [isShown, setIsShown] = useState(false)
  const handleCopy = (link: string): void => {
    copyToClipBoard(link)
    setIsShown(true)
  }

  const formattedDate = useMemo(() => formatDate(lastUpdated), [lastUpdated])

  return (
    <>
      <tr>
        <td aria-label='First Name:'>
          <div>{firstName}</div>
        </td>
        <td aria-label='Last Name:'>
          <div>{lastName}</div>
        </td>
        <td aria-label='Question:'>
          <div>{question}</div>
        </td>
        <td aria-label='Answer:'>
          <div>{answer || <XIcon />}</div>
        </td>
        <td aria-label='Last Updated:'>
          <div>{formattedDate}</div>
        </td>
        <td aria-label='Link:' onClick={() => handleCopy(link)}>
          <div>
            <CopyIcon />
          </div>
        </td>
        <td>
          <DividerBlock />
          <Toast isShown={isShown} setIsShown={setIsShown}>
            <FlexContainer height='100%'>Copied to clipboard</FlexContainer>
          </Toast>
        </td>
      </tr>
    </>
  )
}

const formatDate = (timestamp: number): string => {
  if (!timestamp) return '-'
  return format(new Date(timestamp), 'MMMM do, yyyy - hh:mm aaa')
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
