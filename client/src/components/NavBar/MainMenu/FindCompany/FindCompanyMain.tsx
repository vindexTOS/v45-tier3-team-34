import React from 'react'
import { Outlet } from 'react-router-dom'

const FindCompanyMain = () => {
  return (
    <section className="w-[100vw] h-[100vh]">
      <Outlet />
    </section>
  )
}

export default FindCompanyMain
