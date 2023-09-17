import React from 'react'
import Company_Dashboard from './Company_Dashboard'
import User_layout from '../../../components/User/User_layout'
import { Navigate, Outlet } from 'react-router-dom'
import { UseMainContext } from '../../../context'

const Company_Profile_Main = () => {
  return (
    <section className="flex md:justify-center gap-2 md:gap-10 sm:px-4 w-full  ">
      <Company_Dashboard />
      <div className='flex-1'>
        <User_layout>
          <Outlet />
        </User_layout>
      </div>
    </section>
  )
}

export default Company_Profile_Main
