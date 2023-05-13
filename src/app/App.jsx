import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import withRouter from './components/ui/hoc/withRouter'
import NavBar from './components/ui/NavBar'
import withRedux from './components/ui/hoc/withRedux'

function App() {
  const elements = useRoutes(routes)

  return (
    <>
      <NavBar />
      <div className='mx-4 mb-4'>{elements}</div>
    </>
  )
}

const AppWithRouterAndRedux = withRedux(withRouter(App))
export default AppWithRouterAndRedux
