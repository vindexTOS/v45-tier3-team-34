import React from 'react'
import Portfolio_Navigation from '../components/Dev_Portfolio/Portfolio_Navigation'
import { Outlet } from 'react-router-dom'
import Portfolio_layout from '../components/Dev_Portfolio/Portfolio_layout'
const Dev_Portfolio_Add = () => {
  const style = {
    mainDiv: `bg-gray-200 w-[100vw] h-[100%] gap-4 flex items-start  justify-center py-20 px-80 max_xl:px-0 `,
  }

  return (
    <div className={style.mainDiv}>
      <Portfolio_Navigation />

      <Portfolio_layout>
        <Outlet />
      </Portfolio_layout>
    </div>
  )
}

export default Dev_Portfolio_Add
