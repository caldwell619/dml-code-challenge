import { FC, useEffect, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

export const Toast: FC<Props> = ({ children, isShown, setIsShown }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setIsShown(false)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [isShown, setIsShown])

  return <Container isShown={isShown}>{children}</Container>
}

interface Props {
  isShown: boolean
  setIsShown: Dispatch<SetStateAction<boolean>>
}

interface ContainerProps {
  isShown: boolean
}
const Container = styled.div<ContainerProps>`
  position: fixed;
  z-index: 999999;
  height: 50px;
  width: 250px;
  bottom: 12px;
  padding-left: 20px;
  transition: all 0.6s ease-in-out;
  background-color: ${({ theme }) => theme.brandColor};
  right: ${({ isShown }) => (isShown ? '12px' : '-1000px')};
`
