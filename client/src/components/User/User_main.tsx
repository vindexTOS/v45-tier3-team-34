import React, { useEffect, useState } from 'react'
import { UseMainContext } from '../../context'
import User_portfolio from './User_portfolio'
import User_skills from './User_skills'
import { MdModeEdit, MdOutlineCancel } from 'react-icons/md'
import { GiSaveArrow } from 'react-icons/gi'
import LoadingComponent from '../Status/Loading'
import User_info_Update_input from './User_Info_Update_Input'
const User_main = () => {
  const [titleEdit, setTitleEdit] = useState<boolean>(false)
  const [summaryEdit, setsummary] = useState<boolean>(false)
  const [HrPayEdit, setHrPay] = useState<boolean>(false)

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

  if (
    UserState.userData &&
    UserState.userData.user &&
    UserState.full_user_info.user_info
  ) {
    // const { avatar, date, email, role, userName } = UserState.userData.user
    const { title, summary, hrPay } = UserState.full_user_info.user_info
    return (
      <div className={style.mainDiv}>
        <LoadingComponent loading={UserStateUpdate.loading} />
        <section className={style.topSection}>
          <div className={style.headerDiv}>
            <User_info_Update_input
              initialValue={title}
              type="title"
              obj={{ title: UserStateUpdate.title }}
              newValue={UserStateUpdate.title}
            />
            <User_info_Update_input
              initialValue={`$${hrPay}.00/hr`}
              type="hrPay"
              obj={{ hrPay: UserStateUpdate.hrPay }}
              newValue={UserStateUpdate.hrPay}
              style="w-[4rem]"
            />
          </div>
          <div>
            <User_info_Update_input
              initialValue={summary}
              type="summary"
              obj={{ summary: UserStateUpdate.summary }}
              newValue={UserStateUpdate.summary}
              textArea={true}
              style=" w-[600px] h-[300px]"
            />
            {/* <div className="flex gap-2 items-start justify-start ">
              <p className="break-normal 	">{summary}</p>
              <div className="  text-green-600 text-[1.2rem] bg-white p-1 rounded-[50%] outline outline-2 outline-gray-300  ">
                <MdModeEdit />
              </div>
            </div> */}
          </div>
        </section>
        <User_portfolio />
        <User_skills />
      </div>
    )
  } else {
    return <div>login</div>
  }
}

export default User_main
