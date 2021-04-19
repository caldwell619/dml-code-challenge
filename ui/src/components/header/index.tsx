import { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { Routes } from 'router/routes'

import { HeaderContainer, LinkContainer } from './elements'
// Combining styled components and sass modules due to the limitations of the library.
// They do not provide an easy way to determine if the link is active, they only apply a className
import style from './index.module.sass'

const Header: FC = () => {
  const { location } = useHistory()
  const isUserRoute = location.pathname === Routes.RespondToSurvey
  return (
    <HeaderContainer>
      {isUserRoute ? null : (
        <>
          <LinkContainer activeClassName={style.activeLink} to={Routes.Surveys}>
            Surveys
          </LinkContainer>
          <LinkContainer activeClassName={style.activeLink} to={Routes.CreateSurvey}>
            Create Survey
          </LinkContainer>
        </>
      )}
    </HeaderContainer>
  )
}

export default Header
