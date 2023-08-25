import "./index.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Dev_Add_Personal_Project from "./pages/Dev_Portfolio_Add";
import Portfolio_title from "./components/Dev_Portfolio/Portfolio_title";
import Portfolio_details from "./components/Dev_Portfolio/Portfolio_details";
import Portfolio_Preview from "./components/Dev_Portfolio/Portfolio_Preview";

import Layout from "./layout";

import ListDevelopers from "./pages/MainMenu/FindCompany/ListDevelopers";
import PostProject from "./pages/MainMenu/FindCompany/PostProject";
import ViewProjects from "./pages/MainMenu/FindCompany/ViewProjects";
import NeedHelp from "./pages/MainMenu/FindCompany/NeedHelp";
import NeedHelpDev from "./pages/MainMenu/FindDeveloper/NeedHelpDev";
import MyProjects from "./pages/MainMenu/FindDeveloper/MyProjects";
import ResourceTools from "./pages/MainMenu/FindDeveloper/ResourceTools";
import ListProjects from "./pages/MainMenu/FindDeveloper/ListProjects";
import FAQs from "./pages/MainMenu/WhyDevConnect/FAQs";
import SuccessStories from "./pages/MainMenu/WhyDevConnect/SuccessStories";
import AboutUs from "./pages/MainMenu/WhyDevConnect/AboutUs";
import CategoryPage from "./pages/CategoryPage";

import User_info_form from "./pages/User_info_form";
import { JSX } from "react/jsx-runtime";
import Single_User_Page from "./pages/Single_User_Page";
import FindCompanyMain from "./pages/MainMenu/FindCompany/FindCompanyMain";
import Developer_list from "./pages/Developer_list";

//routes
const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // Main Menu
  {
    path: "/FindCompany/ListDevelopers",
    element: <ListDevelopers />,
  },
  {
    path: "/FindCompany/PostProjects",
    element: <PostProject />,
  },
  {
    path: "/FindCompany/ViewProjects",
    element: <ViewProjects />,
  },
  {
    path: "/FindCompany/NeedHelp",
    element: <NeedHelp />,
  },
  {
    path: "/FindDeveloper/ListProjects",
    element: <ListProjects />,
  },
  {
    path: "/FindDeveloper/ResourceTools",
    element: <ResourceTools />,
  },
  {
    path: "/FindDeveloper/MyProjects",
    element: <MyProjects />,
  },
  {
    path: "/FindDeveloper/NeedHelpDev",
    element: <NeedHelpDev />,
  },
  {
    path: "/WhyDevConnect/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/WhyDevConnect/SuccessStories",
    element: <SuccessStories />,
  },
  {
    path: "/WhyDevConnect/FAQs",
    element: <FAQs />,
  },

  {
    path: "/dev_project_add",
    element: <Dev_Add_Personal_Project />,
    outlet: [
      {
        path: "title",
        element: <Portfolio_title />,
      },
      {
        path: "details",
        element: <Portfolio_details />,
      },
      {
        path: "preview",
        element: <Portfolio_Preview />,
      },
    ],
  },
  {
    path: "/user_info",
    element: <User_info_form />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/Developer/:dev_id",
    element: <Single_User_Page />,
  },
  {
    path: "/FindCompany",
    element: <FindCompanyMain />,
    outlet: [
      {
        path: "ListDevelopers",
        element: <Developer_list />,
      },
    ],
  },
];

type ReactRouteType = {
  path: string;
  element: JSX.Element;
  outlet?: ReactRouteType[];
};
const App = () => {
  return (
    <Layout>
      <Routes>
        {router.map((route: ReactRouteType) => {
          const { path, element, outlet } = route;
          if (outlet) {
            return (
              <Route
                key={path}
                path={path}
                element={element}
              >
                {outlet.map((outletRoute) => {
                  const { path, element } =
                    outletRoute;
                  return (
                    <Route
                      key={path}
                      path={path}
                      element={element}
                    />
                  );
                })}
              </Route>
            );
          } else {
            return (
              <Route
                key={path}
                path={path}
                element={element}
              />
            );
          }
        })}
      </Routes>
    </Layout>
  );
};

export default App;
