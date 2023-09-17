import React, { useRef, useState } from 'react'
import { UseMainContext } from '../../context'
import { DateTime } from 'luxon'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Edit_Profile_Photo from '../Dev_Portfolio/Edit_Profile_Photo'
import { MdModeEdit } from 'react-icons/md'
import useOutClick from '../../hooks/useOutClick'
import NotLogged from '../NotLogged'
// Assuming you have retrieved user data including their timezone from the database

const User_Top = ({
  userData,
  userInfo,
  isUser,
}: {
  userData: any
  userInfo: any
  isUser: boolean
}) => {
  const [editName, setEditName] = useState(false)
  const style = {
    section: `flex items-center justify-start  px-1 md:px-2 py-1 border-b border-gray-300 w-full`,
    img: `h-12 w-12 md:h-16 md:w-16   lg:h-16 lg:w-16  rounded-full lg:object-cover border`,

    imgDiv: `flex gap-1 items-center justify-center`,
    nameHeader: `text-primary  text-xs md:text-lg font-semibold `,
    timeZone: ` flex flex-col  text-xs sm:text-sm md:text-lg font-thin `,
  }
  function getUserTimezone(time: string) {
    // const userTimeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone

    // Get the user's current time based on their timezone
    const userCurrentTime = DateTime.now().setZone(time)

    const currentTime = `${userCurrentTime.toFormat('yyyy-MM-dd HH:mm:ss')}`

    return currentTime
  }

  const [PhotoEdit, setPhotoEdit] = useState<boolean>(false)
  const photEditRef = useRef(null)
  const PhotoEditFun = () => {
    setPhotoEdit(false)
  }
  useOutClick(photEditRef, PhotoEditFun)

  if (userData && userData.user && userInfo) {
    const { avatar, date, email, role, userName } = userData.user
    const { firstName, lastName, userTimeZone } = userInfo

    const currentTime = getUserTimezone(userTimeZone)

    // eslint-disable-next-line @typescript-eslint/no-empty-function

    return (
      <section ref={photEditRef} className={style.section}>
        <div
          className={`${
            !PhotoEdit && 'hidden'
          } absolute w-[100%] h-[100%] top-20 right-0 `}
        >
          {PhotoEdit && <Edit_Profile_Photo setPhotoEdit={setPhotoEdit} />}
        </div>
        <div className={style.imgDiv}>
          <div className="relative">
            <div
              className={` ${
                isUser && 'hidden'
              } absolute text-green-600 text-[1.2rem] bg-white p-1 rounded-[50%] outline outline-2 outline-gray-300 top-[-5px] left-[-5px]`}
              onClick={() => setPhotoEdit(!PhotoEdit)}
            >
              <MdModeEdit />
            </div>
            <img src={`${avatar}`} className={style.img} />
          </div>
          <div className={style.timeZone}>
            {!editName ? (
              <h1 className={style.nameHeader}>
                {firstName && lastName
                  ? `${firstName} ${lastName.slice(0, 1)}.`
                  : userName}
              </h1>
            ) : (
              <input />
            )}
            <div className="flex flex-col sm:flex-row gap-1 text-muted dark:text-gray-400 items-center justify-center">
              <div className="flex gap-1 items-center text-sm">
                <FaMapMarkerAlt />
                <p>{userTimeZone}</p>
              </div>
              <p className="text-sm">{currentTime.slice(10, 16)} local time</p>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default User_Top
