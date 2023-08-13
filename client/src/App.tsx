import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Layout from './layout'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
//routes
const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    //can make it protected or not
    path: '/profile',
    element: <Profile />,
  },
]
type ReactRouteType = {
  path: string
  element: JSX.Element
}
const App = () => {
  return (
    <Routes>g
      {router.map((route: ReactRouteType) => {
        const { path, element } = route
        return <Route key={path} path={path} element={element} />
      })}
    </Routes>
  )
}

export default App
