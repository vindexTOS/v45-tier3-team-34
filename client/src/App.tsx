import './index.css'
import Login from './pages/Login'
import Profile from './pages/Profiles/Dev_Profile/Profile'
import Home from './pages/Home'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Dev_Add_Personal_Project from './pages/Forms/Dev_Portfolio_Add'
import Portfolio_title from './components/Dev_Portfolio/Portfolio_title'
import Portfolio_details from './components/Dev_Portfolio/Portfolio_details'
import Portfolio_Preview from './components/Dev_Portfolio/Portfolio_Preview'

import FAQs from './pages/MainMenu/WhyDevConnect/FAQs'
import SuccessStories from './pages/MainMenu/WhyDevConnect/SuccessStories'
import AboutUs from './pages/MainMenu/WhyDevConnect/AboutUs'

import Single_User_Page from './pages/Profiles/Single_User_Page'
import User_Portfolio_Single from './components/User/User_Portfolio_Single'
import User_info_form from './pages/Forms/User_info_form'
import ForCompanyMain from './pages/MainMenu/ForCompany/ForCompanyMain'
import Company_info_form from './pages/Forms/Company_info_form'
import Company_Profile from './pages/Profiles/Company_Profile/Company_Profile'
import ProjectsListingPage from './pages/ProjectsListingPage'
import Project_Page from './pages/Project/Project_Page'
import Developer_list from './pages/MainMenu/ForCompany/Developer_list'
import PostProject from './pages/MainMenu/ForCompany/PostProject'
import ViewProjects from './pages/MainMenu/ForCompany/ViewProjects'
import NeedHelp from './pages/MainMenu/ForCompany/NeedHelp'
import ListProjects from './pages/MainMenu/ForDeveloper/ListProjects'
import MyProjects from './pages/MainMenu/ForDeveloper/MyProjects'
import NeedHelpDev from './pages/MainMenu/ForDeveloper/NeedHelpDev'
import ResourceTools from './pages/MainMenu/ForDeveloper/ResourceTools'
import CompanyProjectForm from './pages/Forms/Company_Project_posting'
import Layout from './layout'
import Single_Company_Page from './pages/Profiles/Single_Company_Page'
import Profile_Main from './pages/Profiles/Dev_Profile/Profile_Main'
import Current_Projects from './pages/Profiles/Dev_Profile/Current_Projects'
import Archived_Projects from './pages/Profiles/Dev_Profile/Archived_Projects'
import Messages from './pages/Profiles/Messages'
import Reviews from './pages/Profiles/Dev_Profile/Reviews'
import Company_Profile_Main from './pages/Profiles/Company_Profile/Company_Profile_Main'
import Company_Reviews from './pages/Profiles/Company_Profile/Company_Reviews'
import Company_Current_Projects from './pages/Profiles/Company_Profile/Company_Current_Projects'
import Company_Archived_Projects from './pages/Profiles/Company_Profile/Company_Archived_Projects'
import Application_form from './pages/Forms/Application_form'
import Chat from './components/Chat/Chat_Main'

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
    path: '/ForCompany',
    element: <ForCompanyMain />,
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
    path: '/ForDeveloper/ListProjects',
    element: <ListProjects />,
  },
  {
    path: '/ForDeveloper/ResourceTools',
    element: <ResourceTools />,
  },
  {
    path: '/ForDeveloper/MyProjects',
    element: <MyProjects />,
  },
  {
    path: '/ForDeveloper/NeedHelpDev',
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
    element: <Profile_Main />,
    outlet: [
      {
        path: '',
        element: <Profile />,
      },
      {
        path: 'current_project',
        element: <Current_Projects />,
      },
      {
        path: 'archived_project',
        element: <Archived_Projects />,
      },
      {
        path: 'messages',
        element: <Messages />,
        outlet: [
          {
            path: 'chat/:userId',
            element: <Chat />,
          },
        ],
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
    ],
  },
  {
    path: '/company_profile',
    element: <Company_Profile_Main />,
    outlet: [
      {
        path: '',
        element: <Company_Profile />,
      },
      {
        path: 'current_project',
        element: <Company_Current_Projects />,
      },

      {
        path: 'archived_project',
        element: <Company_Archived_Projects />,
      },
      {
        path: 'messages/:userId',
        element: <Messages />,
      },
      {
        path: 'reviews',
        element: <Company_Reviews />,
      },
    ],
  },
  // { path: '/chat/:userId', element: <Chat /> },
  {
    path: '/company_project',
    element: <CompanyProjectForm />,
  },
  {
    path: 'user/project/:project_id',
    element: <User_Portfolio_Single />,
  },

  {
    path: '/Developer/:dev_id',
    element: <Single_User_Page />,
  },

  {
    path: '/company/page/:company_id',
    element: <Single_Company_Page />,
  },

  //projects listing page (by category) !! ??
  {
    path: '/projects/:project_category',
    element: <ProjectsListingPage />,
  },
  //company project details page
  {
    path: '/company/projects/:project_id',
    element: <Project_Page />,
  },
  // project application
  {
    path: '/company/project/application/:project_id',
    element: <Application_form />,
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
