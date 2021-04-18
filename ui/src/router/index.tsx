import { FC, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from 'components/header'

import { Routes } from './routes'

const Home = lazy(() => import('views/home'))
const Surveys = lazy(() => import('views/surveys'))
const CreateSurvey = lazy(() => import('views/create-survey'))
const RespondToSurvey = lazy(() => import('views/survey-response'))

const Router: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<span />}>
        <Switch>
          <Route path={Routes.RespondToSurvey} component={RespondToSurvey} />
          <Route path={Routes.CreateSurvey} component={CreateSurvey} />
          <Route path={Routes.Surveys} component={Surveys} />
          <Route path={Routes.Home} component={Home} />
        </Switch>
      </Suspense>
    </>
  )
}

export default Router
