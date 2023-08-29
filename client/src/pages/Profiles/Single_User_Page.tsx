import React, { useState, useEffect } from 'react'

import User_layout from '../../components/User/User_layout'
import User_Top from '../../components/User/User_Top'
import User_Side from '../../components/User/User_Side'
import User_main from '../../components/User/User_main'
import { UseMainContext } from '../../context'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingComponent from '../../components/Status/Loading'
import User_info_Update_input from '../../components/User/User_Info_Update_Input'
import User_portfolio from '../../components/User/User_portfolio'
import User_skills from '../../components/User/User_skills'
import axios from 'axios'
const Single_User_Page = () => {
  const style = {
    mainDiv: `w-[75%] h-[1000px]`,
    headerDiv: `flex  justify-around text-gray-700 text-[1.3rem] font-bold py-3`,
    topSection: ` border-b-[2px] px-4 py-6 flex flex-col  gap-5`,
  }
  const { dev_id } = useParams()
  const {
    devInfo,
    GetSingleDev,
    UserStateUpdate,
    PortfolioDispatch,
    PortfolioState,
  } = UseMainContext()
  const navigation = useNavigate()
  const [projects, setProjects] = useState<any>()
  useEffect(() => {
    GetSingleDev(dev_id || '')
  }, [])

  const getAllDevProjects = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_GLOBAL_URL}/projects/${dev_id}`,
      )
      const data = res.data

      PortfolioDispatch({ type: 'get-user-projects', payload: data })
    } catch (error) {
      const err: any = error
      console.log(err)
    }
  }

  useEffect(() => {
    getAllDevProjects()
  }, [])

  if (devInfo && devInfo.user_info && devInfo.user) {
    return (
      <User_layout>
        <div
          onClick={() => console.log(devInfo)}
          className="flex  flex-col gap-2 p-2 items-center justify-center "
        >
          <User_Top
            isUser={true}
            userData={devInfo}
            userInfo={devInfo.user_info}
          />
          <section className="flex w-[100%]">
            <User_Side isUser={true} userInfo={devInfo} />

            {/* user main start */}
            <div
              onClick={() => console.log(devInfo.user_info)}
              className={style.mainDiv}
            >
              <LoadingComponent loading={UserStateUpdate.loading} />
              <section className={style.topSection}>
                <div className={style.headerDiv}>
                  <User_info_Update_input
                    isUser={true}
                    initialValue={devInfo.user_info.title}
                    type="title"
                    obj={{ title: UserStateUpdate.title }}
                    newValue={UserStateUpdate.title}
                    link="user"
                  />
                  <User_info_Update_input
                    isUser={true}
                    initialValue={`$${devInfo.user_info.hrPay}.00/hr`}
                    type="hrPay"
                    obj={{ hrPay: UserStateUpdate.hrPay }}
                    newValue={UserStateUpdate.hrPay}
                    link="user"
                  />
                </div>
                <div>
                  <User_info_Update_input
                    isUser={true}
                    initialValue={devInfo.user_info.summary}
                    type="summary"
                    obj={{ summary: UserStateUpdate.summary }}
                    newValue={UserStateUpdate.summary}
                    textArea={true}
                    style=" w-[600px] h-[300px]"
                    link="user"
                  />
                </div>
              </section>
              <div className="flex  gap-5 px-5 py-10 flex-col">
                <div className="flex items-center gap-3">
                  <h1 className="text-[1.4rem]  ">
                    Portfolio (
                    <span>{PortfolioState.userProjects.projects.length}</span>)
                  </h1>
                </div>
                {PortfolioState.userProjects.projects
                  .slice(0, 3)
                  .map((val: any) => {
                    return (
                      <section key={val._id} className="flex flex-col gap-2 ">
                        <img className="w-[250px] h-[200px]" src={val.photo} />
                        <div
                          className="text-green-500 text-bold  text-[1.1rem] font-medium hover:text-green-400 hover:underline"
                          onClick={() => navigation(`/Project/${val._id}`)}
                        >
                          {val.title}
                        </div>
                      </section>
                    )
                  })}
              </div>
              {/* <User_portfolio isUser={isUser} />
              <User_skills isUser={isUser} userInfo={userInfo} /> */}
            </div>
            {/* user main end  */}
          </section>
        </div>
      </User_layout>
    )
  } else {
    return <div>User Not Found</div>
  }
}

export default Single_User_Page
