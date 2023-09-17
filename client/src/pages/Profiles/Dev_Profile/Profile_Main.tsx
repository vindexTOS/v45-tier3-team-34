import React, {
  useEffect,
  useState,
} from "react";
import User_layout from "../../../components/User/User_layout";
import {
  Navigate,
  Outlet,
} from "react-router-dom";
import Profile_Dashboard from "./Profile_Dashboard";
import { UseMainContext } from "../../../context";
import { AiOutlineBars } from "react-icons/ai";

const Profile_Main = () => {
  const { isUserLoggedIn, UserState } =
    UseMainContext();
  const [dropDashboard, setDropDashboard] =
    useState(false);

  // Function to set dropDashboard to true on normal screen size
  const setDropDashboardOnNormalScreen = () => {
    if (window.innerWidth >= 640) {
      setDropDashboard(true);
    } else {
      setDropDashboard(false);
    }
  };

  // Add an event listener to check the screen size and set dropDashboard accordingly
  useEffect(() => {
    setDropDashboardOnNormalScreen();
    window.addEventListener(
      "resize",
      setDropDashboardOnNormalScreen
    );

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener(
        "resize",
        setDropDashboardOnNormalScreen
      );
    };
  }, []);

  if (
    isUserLoggedIn &&
    UserState.userData.user.role === "Developer"
  ) {
    return (
      <section className="flex md:justify-center gap-2 md:gap-10 sm:px-4 w-full ">
        <AiOutlineBars
          className="text-[2rem] absolute top-[7rem] z-50 sm:hidden "
          onClick={() =>
            setDropDashboard(!dropDashboard)
          }
        />
        {dropDashboard && <Profile_Dashboard />}
        <div className="flex-1">
          <User_layout>
            <Outlet />
          </User_layout>
        </div>
      </section>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default Profile_Main;
