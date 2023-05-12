import React from 'react'
import withRouter from './components/ui/hoc/withRouter'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
  const elements = useRoutes(routes)

  return <div className='mx-4 mb-4'>{elements}</div>
}

const AppWithRouter = withRouter(App)
export default AppWithRouter
