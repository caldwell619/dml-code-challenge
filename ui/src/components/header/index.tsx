import { FC, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import GraphQLIcon from 'components/svg/logos/GraphQL'
import PostmanIcon from 'components/svg/logos/Postman'
import { Routes, userRoutes } from 'router/routes'
import { Settings } from 'context/Settings'

import { HeaderContainer, LinkContainer, HttpLogo } from './elements'
// Combining styled components and sass modules due to the limitations of the library.
// They do not provide an easy way to determine if the link is active, they only apply a className
import style from './index.module.sass'

const Header: FC = () => {
  const { isUsingGraphQL } = useContext(Settings)
  const { location } = useHistory()
  const isUserRoute = userRoutes[location.pathname as Routes]
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
      <LinkContainer activeClassName={style.activeLink} to={Routes.Settings}>
        Settings
      </LinkContainer>
      <HttpLogo>{isUsingGraphQL ? <GraphQLIcon /> : <PostmanIcon />}</HttpLogo>
    </HeaderContainer>
  )
}

export default Header
