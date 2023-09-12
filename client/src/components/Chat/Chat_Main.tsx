import React, { RefObject, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UseMainContext } from '../../context'
import io, { Socket } from 'socket.io-client'
import { IoSendSharp } from 'react-icons/io5'
import { DefaultEventsMap } from '@socket.io/component-emitter'
import ChatSection from './ChatSection'
const ENDPOINT = import.meta.env.VITE_GLOBAL_URL

const Chat = ({ userId }: { userId: string }) => {
  const {
    UserState,
    isUserLoggedIn,
    GetMessages,
    chatRoom,
    setChatRoomInfo,
    messages,
    setMessages,
  } = UseMainContext()

  const [userInfo, setUserInfo] = useState<any>()
  const [messageContent, setMessagesContent] = useState('')
  const [socketConnected, setSocketConnected] = useState(false)
  const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(ENDPOINT)

  const SendMessage = async () => {
    try {
      if (isUserLoggedIn && userId) {
        setSocketConnected(!socketConnected)
        const res = await axios.post(
          `${import.meta.env.VITE_GLOBAL_URL}/chat/send-message`,
          {
            messageContent,
            senderId: UserState.userData.user._id,
            receiverId: userId,
          },
        )
        console.log(res)
        console.log('message sent')

        socket.emit('message', {
          messageContent,
          senderId: UserState.userData.user._id,
          receiverId: userId,
        })
        setMessagesContent('')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const GetSingleDev = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_GLOBAL_URL}/user/info/${userId}`,
      )
      setUserInfo(res.data)

      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetSingleDev()
  }, [userId])
  useEffect(() => {
    GetMessages(userId)
  }, [userId])
  useEffect(() => {
    socket.on('new message', (data: any) => {
      setMessages((prevMessages: any) => [...prevMessages, data])
    })

    return () => {
      // Clean up the event listener when the component unmounts
      socket.off('new message')
    }
  }, [socketConnected])

  if (userInfo && userInfo.user && userInfo.user.userName) {
    return (
      <div
        className="flex-1 flex rounded-r-2xl items-center bg-slate-100 dark:bg-slate-700 justify-between"
        style={{
          height: '600px',
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Chat top */}
        <div className="flex items-center justify-start px-5   gap-5 bg-green-300/10 rounded-tr-2xl w-[100%] py-5">
          <img
            className="w-[50px] h-[50px] rounded-[50%]"
            src={userInfo.user.avatar}
          />
          <div>
            <h1 className="text-[1rem] font-semibold text-light-primary dark:text-dark-primary">
              {userInfo.user.userName}
            </h1>
            <p className="text-xs text-light-green dark:text-dark-green">
              4 hours ago
            </p>
          </div>
        </div>
        <ChatSection messages={messages} />
        {/* Chat body */}
        <div className='w-full py-2 flex justify-center items-center border-t border-t-gray-300'>
          <div className="w-[95%]  py-1 px-6 pr-1 flex my-auto justify-around bg-white dark:bg-slate-800 rounded-lg">
            <input
              value={messageContent}
              className="outline-0 bg-transparent  w-full text-sm"
              onChange={(e) => setMessagesContent(e.target.value)}
              placeholder="start typing here ..."
            />
            <button
              className="bg-light-green hover:bg-light-primary h-full w-fit flex items-center justify-center rounded-lg p-2 hover:bg-green-600"
              onClick={SendMessage}
            >
              <IoSendSharp size={22}  />
            </button>
          </div>{' '}
        </div>
      </div>
    )
  } else {
    return <div>NO Messages yet... </div>
  }
}

export default Chat
