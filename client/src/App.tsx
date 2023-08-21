import './index.css'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Dev_Add_Personal_Project from './pages/Dev_Portfolio_Add'
import Portfolio_title from './components/Dev_Portfolio/Portfolio_title'
import Portfolio_details from './components/Dev_Portfolio/Portfolio_details'
import Portfolio_Preview from './components/Dev_Portfolio/Portfolio_Preview'
import Layout from './layout'
import User_info_form from './pages/User_info_form'
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
    path: '/dev_project_add',
    element: <Dev_Add_Personal_Project />,
    outlet: [
      {
        path: 'title',
        element: <Portfolio_title />,
      },
      {
        path: 'details',
        element: <Portfolio_details />,
      },
      {
        path: 'preview',
        element: <Portfolio_Preview />,
      },
    ],
  },
  {
    path: '/user_info',
    element: <User_info_form />,
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
  outlet?: ReactRouteType[]
}
const App = () => {
  return (
    <Layout>
      <Routes>
        {router.map((route: ReactRouteType) => {
          const { path, element, outlet } = route
          if (outlet) {
            return (
              <Route key={path} path={path} element={element}>
                {outlet.map((outletRoute) => {
                  const { path, element } = outletRoute
                  return <Route key={path} path={path} element={element} />
                })}
              </Route>
            )
          } else {
            return <Route key={path} path={path} element={element} />
          }
        })}
      </Routes>
    </Layout>
  )
}

export default App
