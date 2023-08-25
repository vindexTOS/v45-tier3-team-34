import React, { useEffect, useState } from 'react'
import { UseMainContext } from '../../context'
import User_portfolio from './User_portfolio'
import User_skills from './User_skills'
import { MdModeEdit, MdOutlineCancel } from 'react-icons/md'
import { GiSaveArrow } from 'react-icons/gi'
import LoadingComponent from '../Status/Loading'
import User_info_Update_input from './User_Info_Update_Input'
const User_main = ({
  userData,
  userInfo,
  isUser,
}: {
  userData: any
  userInfo: any
  isUser: boolean
}) => {
  const {
    UserState,
    UserStateUpdateDispatch,
    UserStateUpdate,

    UpdateUserInfo,
  } = UseMainContext()
  const style = {
    mainDiv: `w-[75%] h-[1000px]`,
    headerDiv: `flex  justify-around text-gray-700 text-[1.3rem] font-bold py-3`,
    topSection: ` border-b-[2px] px-4 py-6 flex flex-col  gap-5`,
  }

  if (userData && userData.user && userInfo) {
    // const { avatar, date, email, role, userName } = UserState.userData.user
    const { title, summary, hrPay } = UserState.full_user_info.user_info
    return (
      <div className={style.mainDiv}>
        <LoadingComponent loading={UserStateUpdate.loading} />
        <section className={style.topSection}>
          <div className={style.headerDiv}>
            <User_info_Update_input
              isUser={isUser}
              initialValue={title}
              type="title"
              obj={{ title: UserStateUpdate.title }}
              newValue={UserStateUpdate.title}
            />
            <User_info_Update_input
              isUser={isUser}
              initialValue={`$${hrPay}.00/hr`}
              type="hrPay"
              obj={{ hrPay: UserStateUpdate.hrPay }}
              newValue={UserStateUpdate.hrPay}
              style="w-[4rem]"
            />
          </div>
          <div>
            <User_info_Update_input
              isUser={isUser}
              initialValue={summary}
              type="summary"
              obj={{ summary: UserStateUpdate.summary }}
              newValue={UserStateUpdate.summary}
              textArea={true}
              style=" w-[600px] h-[300px]"
            />
          </div>
        </section>
        <User_portfolio isUser={isUser} />
        <User_skills isUser={isUser} />
      </div>
    )
  } else {
    return <div>login</div>
  }
}

export default User_main
