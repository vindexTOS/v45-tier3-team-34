import React, { useEffect, useState } from 'react'
import User_layout from '../../components/User/User_layout'
import axios from 'axios'
import User_info_update_input from '../../components/User/User_Info_Update_Input'
import Succsess from '../../components/Status/Success'
import { UseMainContext } from '../../context'
import LoadingComponent from '../../components/Status/Loading'
import { SiWebmoney } from 'react-icons/si'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { DateTime } from 'luxon'
import { useParams } from 'react-router-dom'
const Single_Company_Page = () => {
  const { UserState, statusState, UserStateUpdate } = UseMainContext()
  const { company_id } = useParams()
  const style = {
    section: `flex items-center justify-between w-[100%] i px-4 py-5 border-b-[1px] border-gray-300 `,
    img: `h-[80px] w-[80px] rounded-[50%]`,
    imgDiv: `flex gap-1 items-start justify-around `,
    nameHeader: `text-gray-800 text-[1.6rem] font-bold`,
    timeZone: ` flex flex-col gap-2`,
    mainDiv: `w-[25%] border-r-[1px] border-gray-300  flex items-center justify-start py-10 flex-col gap-2 `,
    aTeg: `flex items-center justify-center py-2  w-[15rem] border-2 border-orange-900/40 rounded-[39px] bg-yellow-600/10  gap-2 hover:bg-green-600/10`,
    main: `w-[75%] h-[1000px]`,
    headerDiv: `flex  justify-around text-gray-700 text-[1.3rem] font-bold py-3`,
    topSection: ` border-b-[2px] px-4 py-6 flex flex-col  gap-5`,
  }
  const [companyData, setCompanyData] = useState<any>()
  const GetCompanyInfomration = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_GLOBAL_URL}/company/info/${company_id}`,
      )

      const data = res.data

      setCompanyData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetCompanyInfomration()
  }, [])
  function getUserTimezone() {
    // const userTimeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone
    //   console.log("User's timezone:", userTimeZone)

    // Get the user's current time based on their timezone
    const userCurrentTime = DateTime.now().setZone(
      UserState.full_user_info.userTimeZone,
    )

    const currentTime = `${userCurrentTime.toFormat('yyyy-MM-dd HH:mm:ss')}`

    return currentTime
  }
  const currentTime = getUserTimezone()
  const RateUser = async (user_id: string) => {
    if (companyData && companyData.user_info && companyData.user._id) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_GLOBAL_URL}/rating/${companyData.user._id}`,
          {
            rater_id: UserState.userData.user?._id,
            rating_score: rating,
            rating_review: '',
          },
        )
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
  const [rating, setRating] = useState<number>(0)

  const GetUserRating = async () => {
    if (companyData && companyData.user_info && companyData.user._id) {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/rating/${companyData.user._id}`,
        )
        setRatingFromDb(res.data)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const [ratingFromDb, setRatingFromDb] = useState<number>()
  useEffect(() => {
    GetUserRating()
  }, [])
  if (companyData && companyData.user_info && companyData.user) {
    const {
      companyName,
      company_id,
      hrPay,
      linkedin,
      summary,
      userTimeZone,
      website,
    } = companyData.user_info
    const { avatar, date, email, role, userName } = companyData.user
    return (
      <User_layout>
        <div
          // onClick={() => console.log(UserStateUpdate)}
          className="flex  flex-col gap-2 p-2 items-center justify-center "
        >
          {/* <div onClick={() => console.log(ratingFromDb)}>
            <h1>Ratinig {rating}</h1>
            <input
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              type="range"
              max="5"
              min="1"
            />
            <button
              onClick={() => RateUser(companyData.user._id)}
              className="bg-red-500 text-white  p-2 rounded-[9px]"
            >
              Rate
            </button>

          
          </div> */}
          <section
            //   onClick={() => console.log(UserState.full_user_info.user_info)}
            className={style.section}
          >
            <div className={style.imgDiv}>
              <div className="relative">
                <img src={`${avatar}`} className={style.img} />
              </div>
              <div className={style.timeZone}>
                <h1 className={style.nameHeader}>
                  {companyName ? `${companyName.slice(0, 1)}.` : userName}
                </h1>

                <div className="flex gap-1 text-gray-500 items-center justify-center">
                  <FaMapMarkerAlt />
                  <p>{userTimeZone}</p>-
                  <p>{currentTime.slice(10, 16)} local time</p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex w-[100%]">
            {/* side */}
            <div className={style.mainDiv}>
              {linkedin && (
                <a href={linkedin} target="_blank" className={style.aTeg}>
                  <AiOutlineLinkedin className="text-[1.2rem] text-yellow-900 cursor-pointer" />

                  <h1 className="text-yellow-900 text-[1rem]">Linkedin</h1>
                </a>
              )}
              {website && (
                <a href={website} target="_blank" className={style.aTeg}>
                  <SiWebmoney className="text-[1.2rem] text-yellow-900" />

                  <h1 className="text-yellow-900 text-[1rem]">
                    Personal Website
                  </h1>
                </a>
              )}
            </div>
            {/* side */}
            {/* main */}
            <div className={style.main}>
              <LoadingComponent loading={UserStateUpdate.loading} />
              <section className={style.topSection}>
                <div className={style.headerDiv}>
                  <User_info_update_input
                    isUser={true}
                    initialValue={companyName}
                    type="companyName"
                    obj={{ companyName: UserStateUpdate.companyName }}
                    newValue={UserStateUpdate.companyName}
                    link="company"
                  />
                  <User_info_update_input
                                      isUser={true}

                    initialValue={`$${hrPay}.00/hr`}
                    type="hrPay"
                    obj={{ hrPay: UserStateUpdate.hrPay }}
                    newValue={UserStateUpdate.hrPay}
                    style="w-[4rem]"
                    link="company"
                  />
                </div>
                <div>
                  <User_info_update_input
                                     isUser={true}

                    initialValue={summary}
                    type="summary"
                    obj={{ summary: UserStateUpdate.summary }}
                    newValue={UserStateUpdate.summary}
                    textArea={true}
                    style=" w-[600px] h-[300px]"
                    link="company"
                  />
                </div>
              </section>
            </div>
            {/* main */}
          </section>
          <Succsess success={statusState.success} />
        </div>
      </User_layout>
    )
  } else {
    return <div>Loading..</div>
  }
}

export default Single_Company_Page
