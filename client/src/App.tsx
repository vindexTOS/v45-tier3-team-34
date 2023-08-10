import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Layout from "./layout";
import Register from "./pages/Register";

//routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/register",
    element:<Register/>
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    //can make it protected or not
    path: "/profile/:id",
    element:<Profile/>
  }
]);

 const App = () => {
   return (
      <RouterProvider router={router} />
  )
};

export default App;
