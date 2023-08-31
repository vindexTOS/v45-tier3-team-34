import React from 'react'
import Company_Dashboard from './Company_Dashboard'
import User_layout from '../../../components/User/User_layout'
import { Outlet } from 'react-router-dom'

const Company_Profile_Main = () => {
  return (
    <section className="flex h-[100%] gap-20  ">
      <Company_Dashboard />
      <User_layout>
        <Outlet />
      </User_layout>
    </section>
  )
}

export default Company_Profile_Main
