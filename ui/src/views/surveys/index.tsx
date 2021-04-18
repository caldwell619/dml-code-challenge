import { FC } from 'react'

import { Layout } from 'components/shared'
import AdminSurveyView from 'components/surveys'

const Surveys: FC = () => {
  return (
    <Layout>
      <AdminSurveyView />
    </Layout>
  )
}

export default Surveys
