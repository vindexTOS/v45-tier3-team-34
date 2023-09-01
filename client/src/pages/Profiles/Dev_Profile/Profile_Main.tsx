import React from 'react'
import User_layout from '../../../components/User/User_layout'
import { Outlet } from 'react-router-dom'
import Profile_Dashboard from './Profile_Dashboard'
const Profile_Main = () => {
  return (
    <section className="flex h-[100%] gap-20  ">
      <Profile_Dashboard />
      <User_layout>
        <Outlet />
      </User_layout>
    </section>
  )
}

export default Profile_Main
