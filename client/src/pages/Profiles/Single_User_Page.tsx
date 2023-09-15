import React, { useState, useEffect } from 'react'
import AllRatings from './AllRatings'
import User_layout from '../../components/User/User_layout'
import User_Top from '../../components/User/User_Top'
import User_Side from '../../components/User/User_Side'
import User_main from '../../components/User/User_main'
import { UseMainContext } from '../../context'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingComponent from '../../components/Status/Loading'
import User_info_Update_input from '../../components/User/User_Info_Update_Input'
import Rating from './Rating'
import axios from 'axios'
import RatesStars from '../../components/ProjectsListingPage/Projects/RatesStars'
const Single_User_Page = () => {
  const style = {
    mainDiv: `w-full h-fit`,
    headerDiv: `flex flex-wrap md:flex-nowrap gap-2  justify-around text-gray-700 text-[1.3rem] font-bold py-3`,
    topSection: ` border-b px-4 py-6 flex flex-col  gap-5`,
  }
  const { dev_id } = useParams()
  const navigate = useNavigate()
  const {
    devInfo,
    GetSingleDev,
    UserStateUpdate,
    PortfolioDispatch,
    PortfolioState,
    UserState,
    GoToUserChat,
    statusState,
  } = UseMainContext()
  const navigation = useNavigate()
  const [projects, setProjects] = useState<any>()
  useEffect(() => {
    GetSingleDev(dev_id || '')
  }, [])

  // const getAllDevProjects = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${import.meta.env.VITE_GLOBAL_URL}/projects/${dev_id}`,
  //     )
  //     const data = res.data

  //     PortfolioDispatch({ type: 'get-user-projects', payload: data })
  //   } catch (error) {
  //     const err: any = error
  //     console.log(err)
  //   }
  // }

  const GetUserRating = async () => {
    if (devInfo && devInfo.user && devInfo.user._id) {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/rating/${devInfo.user._id}`,
        )
        setRatingFromDb(res.data.rating)
      } catch (error) {
        console.log(error)
      }
    }
  }
  const [ratingFromDb, setRatingFromDb] = useState<any>()

  // useEffect(() => {
  //   getAllDevProjects()
  // }, [])

  useEffect(() => {
    GetUserRating()
  }, [devInfo, statusState.success])

  if (ratingFromDb) {
    return (
      <User_layout>
        <div className="flex  flex-col gap-2 p-2 items-center justify-center ">
          {/* <section className='flex justify-between items-center  w-full '> */}

          <h1
            role='button'
            className='cursor-pointer'
            onClick={() => GoToUserChat(dev_id || '')}>Message</h1>
            <User_Top
              isUser={true}
              userData={devInfo}
              userInfo={devInfo.user_info}
            />
          {/* </section> */}
          <section className="flex w-full">
            <User_Side isUser={true} userInfo={devInfo} />

            {/* user main start */}
            <div className={style.mainDiv}>
              <LoadingComponent loading={UserStateUpdate.loading} />
              <section className={style.topSection}>
                <div className={style.headerDiv}>
                  <User_info_Update_input
                    isUser={true}
                    initialValue={devInfo.user_info?.title}
                    type="title"
                    obj={{ title: UserStateUpdate?.title }}
                    newValue={UserStateUpdate?.title}
                    link="user"
                  />
                  <User_info_Update_input
                    isUser={true}
                    initialValue={`$${devInfo?.user_info?.hrPay}.00/hr`}
                    type="hrPay"
                    obj={{ hrPay: UserStateUpdate?.hrPay }}
                    newValue={UserStateUpdate?.hrPay}
                    link="user"
                  />
                </div>
                <div>
                  <User_info_Update_input
                    isUser={true}
                    initialValue={devInfo?.user_info?.summary}
                    type="summary"
                    obj={{ summary: UserStateUpdate?.summary }}
                    newValue={UserStateUpdate?.summary}
                    textArea={true}
                    style=" w-[600px] h-fit"
                    link="user"
                  />
                </div>
              </section>
              {/* <div className="flex  gap-5 px-5 py-10 flex-col">
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
                          onClick={() => navigation(`/user/project/${val._id}`)}
                        >
                          {val.title}
                        </div>
                      </section>
                    )
                  })}
              </div> */}
              {/* <User_portfolio isUser={isUser} />
              <User_skills isUser={isUser} userInfo={userInfo} /> */}
              
              <div className='p-2 md:p-4'>
                <Rating dev_id={dev_id || ''} data={ratingFromDb} />
              </div>

              <div className='px-2 md:px-4'>
                <RatesStars data={ratingFromDb} />
                <h2 className='text-sm text-muted'>See all reviews</h2>
                <AllRatings data={ratingFromDb} />
              </div>
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
