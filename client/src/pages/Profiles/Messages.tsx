import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Chat from '../../components/Chat/Chat_Main'
import axios from 'axios'
import { UseMainContext } from '../../context'
const defaultPhoto =
  'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'

const Messages = () => {
  const { UserState, isUserLoggedIn, userId, setUserId } = UseMainContext()
  const [chatData, setChatData] = useState<any>([])

  const getUserId = (id: string) => {
    setUserId(id)
  }
  const GetSingleUserChats = async () => {
    try {
      if (isUserLoggedIn) {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/chat/get-user-chats/${
            UserState.userData.user._id
          }`,
        )

        const data = res.data.chatRooms

        setChatData(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetSingleUserChats()
  }, [UserState.userData])
  if (isUserLoggedIn)
    return (
      <div className=" w-[100%] h-[100%] flex ">
        <div className=" px-4 gap-5 flex flex-col p-4 h-[500px] w-[300px] bg-white rounded-[9px]">
          <h1>Chats</h1>
          {chatData.length > 0
            ? chatData?.map((val: any) => {
                const { id, name, avatar } = val.userInfo

                return (
                  <div
                    onClick={() => getUserId(id)}
                    className="flex items-center gap-2 shadow-md p-2 rounded-[9px]"
                    key={id}
                  >
                    <img
                      className="w-[70px] h-[70px] rounded-[50%] shadow-md"
                      src={avatar ? avatar : defaultPhoto}
                    />
                    <h1 className="mb-8 font-medium text-gray-500">{name}</h1>
                  </div>
                )
              })
            : 'NO chats'}
        </div>
        <Chat userId={userId} />
      </div>
    )
}

export default Messages
