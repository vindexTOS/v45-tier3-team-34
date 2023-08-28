import './index.css'
import Login from './pages/Login'
import Profile from './pages/Profiles/Profile'
import Home from './pages/Home'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Dev_Add_Personal_Project from './pages/Forms/Dev_Portfolio_Add'
import Portfolio_title from './components/Dev_Portfolio/Portfolio_title'
import Portfolio_details from './components/Dev_Portfolio/Portfolio_details'
import Portfolio_Preview from './components/Dev_Portfolio/Portfolio_Preview'

import Layout from './layout'

import PostProject from './components/NavBar/MainMenu/FindCompany/PostProject'
import ViewProjects from './components/NavBar/MainMenu/FindCompany/ViewProjects'
import NeedHelp from './components/NavBar/MainMenu/FindCompany/NeedHelp'
import NeedHelpDev from './components/NavBar/MainMenu/FindDeveloper/NeedHelpDev'
import MyProjects from './components/NavBar/MainMenu/FindDeveloper/MyProjects'
import ResourceTools from './components/NavBar/MainMenu/FindDeveloper/ResourceTools'
import ListProjects from './components/NavBar/MainMenu/FindDeveloper/ListProjects'
import FAQs from './components/NavBar/MainMenu/WhyDevConnect/FAQs'
import SuccessStories from './components/NavBar/MainMenu/WhyDevConnect/SuccessStories'
import AboutUs from './components/NavBar/MainMenu/WhyDevConnect/AboutUs'
import CategoryPage from './pages/CategoryPage'

import Single_User_Page from './pages/Profiles/Single_User_Page'
import User_Portfolio_Single from './components/User/User_Portfolio_Single'
import User_info_form from './pages/Forms/User_info_form'
import Developer_list from './components/NavBar/MainMenu/FindCompany/Developer_list'
import FindCompanyMain from './components/NavBar/MainMenu/FindCompany/FindCompanyMain'
import Company_info_form from './pages/Forms/Company_info_form'
import Company_Profile from './pages/Profiles/Company_Profile'
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
  // Main Menu
  {
    path: '/FindCompany',
    element: <FindCompanyMain />,
    outlet: [
      {
        path: 'ListDevelopers',
        element: <Developer_list />,
      },
      {
        path: 'PostProjects',
        element: <PostProject />,
      },
      {
        path: 'ViewProjects',
        element: <ViewProjects />,
      },
      {
        path: 'NeedHelp',
        element: <NeedHelp />,
      },
    ],
  },

  {
    path: '/FindDeveloper/ListProjects',
    element: <ListProjects />,
  },
  {
    path: '/FindDeveloper/ResourceTools',
    element: <ResourceTools />,
  },
  {
    path: '/FindDeveloper/MyProjects',
    element: <MyProjects />,
  },
  {
    path: '/FindDeveloper/NeedHelpDev',
    element: <NeedHelpDev />,
  },
  {
    path: '/WhyDevConnect/AboutUs',
    element: <AboutUs />,
  },
  {
    path: '/WhyDevConnect/SuccessStories',
    element: <SuccessStories />,
  },
  {
    path: '/WhyDevConnect/FAQs',
    element: <FAQs />,
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
    path: '/company_info',
    element: <Company_info_form />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/company_profile',
    element: <Company_Profile />,
  },
  {
    path: '/Project/:project_id',
    element: <User_Portfolio_Single />,
  },

  {
    path: '/Developer/:dev_id',
    element: <Single_User_Page />,
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
