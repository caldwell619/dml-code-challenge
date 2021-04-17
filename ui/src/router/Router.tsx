import { FC, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('views/Home'))

const Router: FC = () => {
  return (
    <Suspense fallback={<span />}>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Suspense>
  )
}

export default Router
