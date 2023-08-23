import React, { useEffect, useState } from 'react'
import { UseMainContext } from '../../context'
import User_portfolio from './User_portfolio'
import User_skills from './User_skills'
import { MdModeEdit, MdOutlineCancel } from 'react-icons/md'
import { GiSaveArrow } from 'react-icons/gi'
import LoadingComponent from '../Status/Loading'

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
            <div className="flex gap-2 items-center justify-center ">
              {!titleEdit ? (
                <h1>{title}</h1>
              ) : (
                <div className="flex  itesm-center jsutify-center gap-1">
                  <input
                    value={UserStateUpdate.title}
                    onChange={(e) =>
                      UserStateUpdateDispatch({
                        type: 'title',
                        payload: e.target.value,
                      })
                    }
                  />
                  <GiSaveArrow
                    className="text-green-400 mt-1 "
                    onClick={() => {
                      UpdateUserInfo({ title: UserStateUpdate.title }),
                        setTitleEdit(false)
                    }}
                  />
                  <MdOutlineCancel
                    className="text-red-400 mt-1 cursor-pointer"
                    onClick={() => setTitleEdit(false)}
                  />
                </div>
              )}
              <div
                className={`  text-green-600 text-[1.2rem] bg-white p-1 rounded-[50%] outline outline-2 outline-gray-300 ${
                  titleEdit && 'hidden'
                } `}
              >
                <MdModeEdit onClick={() => setTitleEdit(!titleEdit)} />
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center ">
              {!summaryEdit ? (
                <h1>${hrPay}.00/hr</h1>
              ) : (
                <div className="flex  itesm-center jsutify-center gap-1">
                  <input
                    className="w-[50px]"
                    value={UserStateUpdate.hrPay}
                    onChange={(e) =>
                      UserStateUpdateDispatch({
                        type: 'hrPay',
                        payload: e.target.value,
                      })
                    }
                  />
                  <GiSaveArrow
                    className="text-green-400 mt-1 "
                    onClick={() => {
                      UpdateUserInfo({ title: UserStateUpdate.title }),
                        setsummary(false)
                    }}
                  />
                  <MdOutlineCancel
                    className="text-red-400 mt-1 cursor-pointer"
                    onClick={() => setsummary(false)}
                  />
                </div>
              )}
              <div
                className={`  text-green-600 text-[1.2rem] bg-white p-1 rounded-[50%] outline outline-2 outline-gray-300 ${
                  summaryEdit && 'hidden'
                } `}
              >
                <MdModeEdit onClick={() => setsummary(!summaryEdit)} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-start justify-start ">
              <p className="break-normal 	">{summary}</p>
              <div className="  text-green-600 text-[1.2rem] bg-white p-1 rounded-[50%] outline outline-2 outline-gray-300  ">
                <MdModeEdit />
              </div>
            </div>
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
