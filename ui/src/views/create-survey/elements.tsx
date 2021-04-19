import styled from 'styled-components'

import { FlexContainer } from 'components/shared'

export const Container = styled(FlexContainer)`
  height: 60vh;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2%;
  & > div {
    width: 90%;
  }
`

export const AnswerOptionList = styled.ol`
  width: 90%;
  padding-left: 3%;
  margin: 0;
  & li {
    margin: 3% 0;
  }
`

export const AnswerOptionTitle = styled.h3`
  margin-bottom: 1%;
`

export const Form = styled.form`
  width: 90%;
`
