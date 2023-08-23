import React, { useEffect } from 'react'
import { UseMainContext } from '../../context'
import { DateTime } from 'luxon'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdModeEdit } from 'react-icons/md'
// Assuming you have retrieved user data including their timezone from the database

const User_Top = () => {
  const { UserState } = UseMainContext()
  const style = {
    section: `flex items-start justify-start w-[100%] px-2 py-5 border-b-[1px] border-gray-300 `,
    img: `h-[80px] w-[80px] rounded-[50%]`,
    imgDiv: `flex gap-1 items-start justify-around `,
    nameHeader: `text-gray-800 text-[1.6rem] font-bold`,
    timeZone: ` flex flex-col gap-2`,
  }
  if (
    UserState.userData &&
    UserState.userData.user &&
    UserState.full_user_info.user_info
  ) {
    const { avatar, date, email, role, userName } = UserState.userData.user
    const {
      firstName,
      lastName,
      userTimeZone,
    } = UserState.full_user_info.user_info

    function getUserTimezone() {
      // const userTimeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone
      //   console.log("User's timezone:", userTimeZone)

      // Get the user's current time based on their timezone
      const userCurrentTime = DateTime.now().setZone(userTimeZone)

      const currentTime = `${userCurrentTime.toFormat('yyyy-MM-dd HH:mm:ss')}`

      return currentTime
    }
    const currentTime = getUserTimezone()
    return (
      <section className={style.section}>
        <div className={style.imgDiv}>
          <div className="relative">
            <div className="absolute text-green-600 text-[1.2rem] bg-white p-1 rounded-[50%] outline outline-2 outline-gray-300 top-[-5px] left-[-5px]">
              <MdModeEdit />
            </div>
            <img
              onClick={() => getUserTimezone()}
              src={avatar}
              className={style.img}
            />
          </div>
          <div className={style.timeZone}>
            <h1 className={style.nameHeader}>
              {firstName && lastName
                ? `${firstName} ${lastName.slice(0, 1)}.`
                : userName}
            </h1>
            <div className="flex gap-1 text-gray-500 items-center justify-center">
              <FaMapMarkerAlt />
              <p>{userTimeZone}</p>-
              <p>{currentTime.slice(10, 16)} local time</p>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return <div>Login </div>
  }
}

export default User_Top
