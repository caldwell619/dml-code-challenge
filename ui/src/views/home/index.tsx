import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Layout, FlexContainer, Button } from 'components/shared'
import { Routes } from 'router/routes'

import { Title, Text, Container, ActionContainer } from './elements'

const Home: FC = () => {
  return (
    <Layout>
      <FlexContainer direction='column' height='70vh'>
        <Title>Christopher Caldwell's submission for the DML challenge.</Title>
        <Container>
          <Text>
            In the upper right corner you will see a logo. This logo controls whether the UI is using GraphQL or
            traditional REST.
          </Text>
          <Text>
            To change this at anytime, navigate to the <Link to={Routes.Settings}>settings</Link> page. There is no
            interruption in functionality.
          </Text>
          <ActionContainer>
            <Link to={Routes.Surveys}>
              <Button>Get Started</Button>
            </Link>
          </ActionContainer>
        </Container>
      </FlexContainer>
    </Layout>
  )
}

export default Home
