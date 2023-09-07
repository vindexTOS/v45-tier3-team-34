import React, { useEffect, useRef, useState } from 'react'
import { BsBell } from 'react-icons/bs'
import User_drop_down from '../User/User_drop_down'
import { UseMainContext } from '../../context'
import useOutClick from '../../hooks/useOutClick'

const UserProflieNav = () => {
  const dropDownRef = useRef<HTMLDivElement | null>(null)

  const { UserState, chatRoom, GetMessages, GoToUserChat } = UseMainContext()
  useEffect(() => {
    GetMessages(UserState.userData.user._id)
  }, [UserState.userData.user._id])
  const [dropDown, setDropDown] = useState(false)
  const [notficationDrop, setNotificationDrop] = useState(false)
  const closeDropDown = () => {
    setDropDown(false)
  }

  const [NotificationMessages, setNotificationMessages] = useState<any>([])
  useOutClick(dropDownRef, closeDropDown)

  useEffect(() => {
    if (chatRoom && chatRoom.messages && chatRoom.messages.length > 0) {
      let Alert = chatRoom.messages.filter(
        (val: any) =>
          String(val.sender) !== UserState.userData.user._id && !val.isRead,
      )
      Alert.reverse()
      setNotificationMessages(Alert)
    }
  }, [chatRoom])

  return (
    <div
      ref={dropDownRef}
      className="relative flex items-center justify-around  gap-5 "
    >
      <div
        onClick={() => setNotificationDrop(!notficationDrop)}
        className="relative"
      >
        <BsBell className="text-[1.5rem] text-gray-400 dark:text-white" />
        <span className="absolute top-3 bg-red-400 text-white flex items-center justify-center text-[12px] p-2  w-[12px] h-[12px]  rounded-[50%]">
          {NotificationMessages.length}
        </span>
      </div>
      <img
        onClick={() => setDropDown(!dropDown)}
        className="w-[50px] h-[50px] rounded-[50%] cursor-pointer"
        src={UserState.userData.user.avatar}
      />
      {dropDown && <User_drop_down />}
      {notficationDrop && (
        <div className="absolute flex flex-col  p-2 rounded-[2px]  bg-white shadow-md max-h-[500px] overflow-y-scroll  top-20 right-[-4rem]  ">
          {NotificationMessages && NotificationMessages.length > 0 ? (
            <div
              onClick={() => console.log(NotificationMessages)}
              className="flex flex-col gap-2 "
            >
              {NotificationMessages.map((val: any) => {
                const { content } = val
                return (
                  <div
                    onClick={() => GoToUserChat(String(val.sender))}
                    className="bg-gray-200 py-2 px-1 rounded-[2px] text-gray-600 hover:bg-gray-300 hover:text-white  "
                    key={val._id}
                  >
                    {content.slice(0, 40)}...
                  </div>
                )
              })}
            </div>
          ) : (
            <div>NO notifcations</div>
          )}
        </div>
      )}
    </div>
  )
}

export default UserProflieNav
