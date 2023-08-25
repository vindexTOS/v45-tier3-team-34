import React from 'react'
import { UseMainContext } from '../../context'
import { MdModeEdit } from 'react-icons/md'

const User_skills = () => {
  const style = {
    mainDiv: `border-t-[2px] flex flex-col  items-center px-4 gap-4 py-3  `,
  }
  const { UserState } = UseMainContext()

  return (
    <div className={style.mainDiv}>
      <div className="flex w-[100%] items-center px-2 justify-start">
        <h1 className="text-[1.4rem]  flex items-start px-2">Skills</h1>
        <div className="  text-green-600 text-[1.2rem] bg-white p-1 rounded-[50%] outline outline-2 outline-gray-300  ">
          <MdModeEdit />
        </div>
      </div>
      <div className="flex  items-center px-30   flex flex-wrap    w-[90%]   gap-2 ">
        {UserState.full_user_info.user_info.skills.map((val: string) => {
          return (
            <div className="bg-gray-200 p-1 px-2 rounded-[19px]">{val}</div>
          )
        })}
      </div>
    </div>
  )
}

export default User_skills
