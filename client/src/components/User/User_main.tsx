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

    UpdateUserInfo,
    UserStateUpdate,
  } = UseMainContext()
  const style = {
    mainDiv: `w-full h-auto border-t border-gray-600/20 dark:border-gray-600/50 md:border-t-0`,
    headerDiv: `w-full flex flex-wrap sm:flex-nowrap justify-between sm:justify-start gap-x-10 gap-y-4  items-start md:item-center text-green-800 dark:text-white text-[1.3rem] `,
    topSection: ` px-4 py-6 flex flex-col  gap-5`,
  }

  if (userData && userData.user && userInfo) {
    // const { avatar, date, email, role, userName } = UserState.userData.user
    const { title, summary, hrPay } = userInfo
    return (
      <div
        onClick={() => console.log(userInfo.user_info)}
        className={style.mainDiv}
      >
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
              initialValue={`$${hrPay?.type}.00/hr`}
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
        <User_skills isUser={isUser} userInfo={userInfo} />
      </div>
    )
  } else {
    return <div>login</div>
  }
}

export default User_main
