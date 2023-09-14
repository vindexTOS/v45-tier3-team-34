import React from 'react'
import User_layout from '../../../components/User/User_layout'
import { Outlet } from 'react-router-dom'
import Profile_Dashboard from './Profile_Dashboard'
const Profile_Main = () => {
  return (
    <section className="flex md:justify-center gap-2 md:gap-10 sm:px-4 w-full ">
      <Profile_Dashboard />
      <div className='flex-1'>
        <User_layout>
          <Outlet />
        </User_layout>
      </div>
    </section>
  )
}

export default Profile_Main
