import React from 'react'
import { CgProfile } from 'react-icons/cg'

import { AiOutlineProject } from 'react-icons/ai'
import { GoArchive } from 'react-icons/go'
import { TiMessages } from 'react-icons/ti'
import { MdOutlineReviews } from 'react-icons/md'
import { useNavigate, useLocation } from 'react-router-dom'
import { GrInProgress } from 'react-icons/gr'
const Company_Dashboard = () => {
  const style = {
    mainDiv: `w-fit dark:outline  dark:outline-[1px] shadow-sm shadow-green-800 bg-green-200/10 dark:bg-slate-800 dark:outline-gray-300 rounded-md h-[500px] flex flex-col py-10 gap-5 mt-2 md:mt-8 `,
  }
  const navigate = useNavigate()
  const location = useLocation()
  const NavigationLinks = [
    {
      title: 'Profile',
      Icon: CgProfile,
      link: '',
    },
    {
      title: 'Applications',
      Icon: AiOutlineProject,
      link: 'applications',
    },
    { title: 'In progress', Icon: GrInProgress, link: 'inprogress' },
    { title: 'Messages', Icon: TiMessages, link: 'messages' },
    { title: 'Reviews', Icon: MdOutlineReviews, link: 'reviews' },
  ]
  return (
    <div className={style.mainDiv}>
      {NavigationLinks.map((val: any) => (
        <div
          className={` z-10 cursor-pointer group flex items-center px-2 md:px-10 gap-2 hover:text-blue-300 cursor-pointer font-thin text-sm sm:text-base ${
            location.pathname === `/company_profile/${val.link}`
              ? 'text-blue-400 dark:text-blue-400 underline'
              : 'text-green-800 dark:text-green-500'
          }  `}
          key={`${val.link}`}
          onClick={() => navigate(val.link)}
        >
          <val.Icon className={`text-2xl md:text-3xl `} />
          <h1 className="hidden md:block">{val.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Company_Dashboard
