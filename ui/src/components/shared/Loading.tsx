import { FC } from 'react'

import { FlexContainer } from 'components/shared'
import LoadingPageSVG from 'assets/svg/loading-page.svg'
import LoadingSpinnerSVG from 'assets/svg/loading-spinner.svg'

export const PageLoading: FC = () => {
  return (
    <FlexContainer>
      <img src={LoadingPageSVG} alt='loading' />
    </FlexContainer>
  )
}

export const LoadingSpinner: FC = () => {
  return (
    <FlexContainer>
      <img src={LoadingSpinnerSVG} alt='loading' />
    </FlexContainer>
  )
}
