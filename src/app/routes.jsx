import { Navigate } from 'react-router-dom'
import MainPage from './components/page/MainPage'
import MemberLayout from './layouts/MemberLayout'
import MemberPage from './components/page/MemberPage'
import FavoritesLayout from './layouts/FavoritesLayout'
import FavoritesPage from './components/page/FavoritesPage'

const routes = [
  { path: '/', element: <MainPage /> },
  {
    path: 'member',
    element: <MemberLayout />,
    children: [
      { path: '', element: <Navigate to='/' /> },
      { path: ':memberId', element: <MemberPage /> }
    ]
  },
  {
    path: 'favorites',
    element: <FavoritesLayout />,
    children: [
      { path: '', element: <FavoritesPage /> },
      { path: '*', element: <Navigate to='/favorites' /> }
    ]
  },
  { path: '*', element: <Navigate to='/' /> }
]

export default routes
