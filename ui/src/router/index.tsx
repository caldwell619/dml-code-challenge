import { FC, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from 'components/header'
import { SettingsProvider } from 'context/Settings'

import { Routes } from './routes'

const Home = lazy(() => import('views/home'))
const Surveys = lazy(() => import('views/surveys'))
const CreateSurvey = lazy(() => import('views/create-survey'))
const RespondToSurvey = lazy(() => import('views/survey-response'))
const ResponseConfirmation = lazy(() => import('views/response-confirmation'))
const Settings = lazy(() => import('views/settings'))

const Router: FC = () => {
  return (
    <SettingsProvider>
      <Header />
      <Suspense fallback={<span />}>
        <Switch>
          <Route path={Routes.Settings} component={Settings} />
          <Route path={Routes.ResponseConfirmation} component={ResponseConfirmation} />
          <Route path={Routes.RespondToSurvey} component={RespondToSurvey} />
          <Route path={Routes.CreateSurvey} component={CreateSurvey} />
          <Route path={Routes.Surveys} component={Surveys} />
          <Route path={Routes.Home} component={Home} />
        </Switch>
      </Suspense>
    </SettingsProvider>
  )
}

export default Router
