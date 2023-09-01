import React from 'react'
import { CgProfile } from 'react-icons/cg'

import { AiOutlineProject } from 'react-icons/ai'
import { GoArchive } from 'react-icons/go'
import { TiMessages } from 'react-icons/ti'
import { MdOutlineReviews } from 'react-icons/md'
import { useNavigate, useLocation } from 'react-router-dom'
const Profile_Dashboard = () => {
  const style = {
    mainDiv: `w-[300px] outline  outline-[1px] outline-gray-300 rounded-[23px] h-[500px] flex flex-col py-10 gap-5 mt-40`,
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
      title: 'Current Projects',
      Icon: AiOutlineProject,
      link: 'current_project',
    },
    { title: 'Archived Projects', Icon: GoArchive, link: 'archived_project' },
    { title: 'Messages', Icon: TiMessages, link: 'messages' },
    { title: 'Reviews', Icon: MdOutlineReviews, link: 'reviews' },
  ]
  return (
    <div
      onClick={() => console.log(location.pathname)}
      className={style.mainDiv}
    >
      {NavigationLinks.map((val: any) => (
        <div
          className={` flex items-center px-10 gap-2 hover:text-blue-300 cursor-pointer ${
            location.pathname === `/profile/${val.link}`
              ? 'text-blue-400'
              : 'text-gray-400 '
          }  `}
          key={`${val.link}`}
          onClick={() => navigate(val.link)}
        >
          <val.Icon className="text-[2rem] text-gray-400" />
          <h1>{val.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Profile_Dashboard
