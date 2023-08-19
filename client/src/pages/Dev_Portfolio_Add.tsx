import React from 'react'
import Portfolio_Navigation from '../components/Dev_Portfolio/Portfolio_Navigation'
import { Outlet, useNavigate } from 'react-router-dom'
import Portfolio_layout from '../components/Dev_Portfolio/Portfolio_layout'
const Dev_Portfolio_Add = () => {
  const navigate = useNavigate()

  const style = {
    mainDiv: ` w-[100vw] py-60 flex flex-col  `,
    header: `text-gray-500  flex items-center justify-center gap-2 font-bold text-[2rem]`,
    skip: `flex text-white text-[1.5rem] items-center bg-blue-500 hover:bg-blue-400 cursor-pointer px-7 rounded-[1.5rem] text-ceneter`,
    section: `flex  gap-4  items-start  justify-center py-20 px-80 max_xl:px-0`,
  }

  return (
    <div className={style.mainDiv}>
      <h1 className={style.header}>
        You can{' '}
        <span onClick={() => navigate('/profile')} className={style.skip}>
          skip
        </span>{' '}
        this step and come back any time to add more projects
      </h1>
      <section className={style.section}>
        <Portfolio_Navigation />
        <Portfolio_layout>
          <Outlet />
        </Portfolio_layout>
      </section>
    </div>
  )
}

export default Dev_Portfolio_Add
