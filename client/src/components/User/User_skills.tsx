import React, { useState } from 'react'
import { UseMainContext } from '../../context'
import { MdModeEdit } from 'react-icons/md'
import SkillSelection from '../Forms/SkillSelection'
const User_skills = ({
  isUser,
  userInfo,
}: {
  isUser?: boolean
  userInfo: any
}) => {
  const style = {
    mainDiv: `border-t flex flex-col  items-center px-1 sm:px-2 gap-4 py-3  border-gray-600/20 dark:border-gray-600/50`,
  }
  const [editSkills, setEditSkills] = useState(false)
  return (
    <div className={style.mainDiv}>
      <div className="flex w-full items-center px-2 justify-start">
        <h1 className="text-lg font-semibold text-green-800 dark:text-green-500  px-2">Skills</h1>
        <div
          onClick={() => setEditSkills(!editSkills)}
          className={` ${
            isUser && 'hidden'
          } text-green-600 text-sm bg-white p-0.5 rounded-full outline outline-2 outline-gray-300 relative -top-2 -left-1`}
        >
          <MdModeEdit />
        </div>
      </div>
      <div className="flex pr-2 sm:pr-4  items-center px-30 flex-wrap    w-[90%]   gap-2 ">
        {userInfo.skills.map((val: string) => {
          return (
            <div key={val} className="bg-gray-200 dark:bg-slate-800 text-sm text-gray-700 dark:text-gray-400 font-thin shadow-md  p-1 px-2 rounded-lg pb-2 border border-gray-600/20 dark:border-gray-600/50">{val}</div>
          )
        })}
      </div>
      <SkillSelection />
    </div>
  )
}

export default User_skills
