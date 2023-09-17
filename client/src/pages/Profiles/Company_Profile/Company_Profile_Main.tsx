import React, { useEffect, useState } from 'react'
import Company_Dashboard from './Company_Dashboard'
import User_layout from '../../../components/User/User_layout'
import { Navigate, Outlet } from 'react-router-dom'
import { UseMainContext } from '../../../context'
import { AiOutlineBars } from 'react-icons/ai'
import Profile_Dashboard from '../Dev_Profile/Profile_Dashboard'

const Company_Profile_Main = () => {
  const { isUserLoggedIn, UserState } = UseMainContext()
  const [dropDashboard, setDropDashboard] = useState(false)

  // Function to set dropDashboard to true on normal screen size
  const setDropDashboardOnNormalScreen = () => {
    if (window.innerWidth >= 640) {
      setDropDashboard(true)
    } else {
      setDropDashboard(false)
    }
  }

  // Add an event listener to check the screen size and set dropDashboard accordingly
  useEffect(() => {
    setDropDashboardOnNormalScreen()
    window.addEventListener('resize', setDropDashboardOnNormalScreen)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', setDropDashboardOnNormalScreen)
    }
  }, [])

  if (isUserLoggedIn && UserState.userData.user.role === 'Company/Startup') {
    return (
      <section className="flex md:justify-center gap-2 md:gap-10 sm:px-4 w-full  ">
        <AiOutlineBars
          className="text-[2rem] absolute top-[7rem] z-50 sm:hidden "
          onClick={() => setDropDashboard(!dropDashboard)}
        />
        {dropDashboard && <Profile_Dashboard />}
        <div className="flex-1">
          <User_layout>
            <Outlet />
          </User_layout>
        </div>
      </section>
    )
  } else {
    return <Navigate to="/" />
  }
}

export default Company_Profile_Main
