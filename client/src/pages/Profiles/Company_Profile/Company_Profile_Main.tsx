import React from 'react'
import Company_Dashboard from './Company_Dashboard'
import User_layout from '../../../components/User/User_layout'
import { Navigate, Outlet } from 'react-router-dom'
import { UseMainContext } from '../../../context'

const Company_Profile_Main = () => {
  const { UserState, isUserLoggedIn } = UseMainContext()
  if (isUserLoggedIn && UserState.userData.user.role === 'Company/Startup') {
    return (
      <section className="flex h-[100%] gap-20 w-[100%] ">
        <Company_Dashboard />
        <User_layout>
          <Outlet />
        </User_layout>
      </section>
    )
  } else {
    return <Navigate to="/" />
  }
}

export default Company_Profile_Main
