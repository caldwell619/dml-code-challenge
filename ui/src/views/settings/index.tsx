import { FC, useContext } from 'react'

import { Settings as SettingsContext } from 'context/Settings'
import GraphQLIcon from 'components/svg/logos/GraphQL'
import PostmanIcon from 'components/svg/logos/Postman'
import { FlexContainer, Layout } from 'components/shared'

import { LogoText, LogoContainer } from './elements'

const Settings: FC = () => {
  const { setIsUsingGraphQL } = useContext(SettingsContext)

  return (
    <Layout>
      <h1>Choose which method powers the app</h1>
      <FlexContainer width='100%' height='60vh'>
        <LogoContainer onClick={() => setIsUsingGraphQL(true)}>
          <GraphQLIcon scale='2.0' />
          <LogoText>GraphQL</LogoText>
        </LogoContainer>
        <LogoContainer onClick={() => setIsUsingGraphQL(false)}>
          <PostmanIcon scale='2.0' />
          <LogoText>REST</LogoText>
        </LogoContainer>
      </FlexContainer>
    </Layout>
  )
}

export default Settings
