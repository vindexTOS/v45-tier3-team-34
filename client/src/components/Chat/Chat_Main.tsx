import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UseMainContext } from '../../context'
import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'
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

  const SeeNotifications = async () => {
    if (isUserLoggedIn) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_GLOBAL_URL}/chat/see-notifications`,
          { receiverId: UserState.userData.user._id },
        )
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
  useEffect(() => {
    SeeNotifications()
  }, [])
  const [userInfo, setUserInfo] = useState<any>()
  const [messageContent, setMessagesContent] = useState('')
  const [socketConnected, setSocketConnected] = useState(false)
  const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(ENDPOINT)

  const SendMessage = async () => {
    try {
      if (isUserLoggedIn && userId) {
        const res = await axios.post(
          `${import.meta.env.VITE_GLOBAL_URL}/chat/send-message`,
          {
            messageContent,
            senderId: UserState.userData.user._id,
            receiverId: userId,
          },
        )
        console.log(res)

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
    // Initialize and connect to the Socket.IO server
    if (isUserLoggedIn) {
      socket.on('connection', () => {
        console.log('Connected to socket.io')
        console.log('User ID:', UserState.userData.user._id)
        setSocketConnected(true)
      })

      // Debugging: Add a listener for 'disconnect' event
    }
  }, [isUserLoggedIn, socket])
  useEffect(() => {
    socket.on('new message', (data: any) => {
      console.log(data)
      setMessages((prevMessages: any) => [...prevMessages, data])
    })
  }, [])

  if (userInfo && userInfo.user && userInfo.user.userName) {
    return (
      <div
        className="flex rounded-[40px] items-center"
        onClick={() => console.log(chatRoom)}
        style={{
          backgroundColor: 'white',
          height: '600px',
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="flex items-center justify-start px-5 rounded-t-[40px]  gap-5 bg-green-400 w-[100%] py-10">
          <img
            className="w-[60px] h-[60px] rounded-[50%]"
            src={userInfo.user.avatar}
          />{' '}
          <h1>{userInfo.user.userName}</h1>
        </div>
        <div className="h-[390px] py-10 w-[100%] bg-white flex flex-col items-center gap-2 overflow-y-scroll">
          {messages &&
            messages.length > 0 &&
            messages.map((val: any) => {
              const { sender, content } = val

              // Determine if the message is sent by the user or received from others
              const isUserMessage = sender === UserState.userData.user._id

              // Apply different styles based on the sender
              const messageClasses = `px-10 max-h-[500px] max-w-[250px] rounded-[50px] break-all py-2 ${
                isUserMessage
                  ? 'bg-green-400 text-white self-start'
                  : 'bg-gray-200 text-right self-end'
              }`

              return (
                <div className={messageClasses} key={val._id}>
                  <h1>{content}</h1>
                </div>
              )
            })}
        </div>

        <div className="bg-white  outline-gray-300 outline-[1px] outline rounded-[30px] w-[90%] p-5 flex justify-around">
          <input
            value={messageContent}
            className="outline-0 bg-transparent  w-[90%]"
            onChange={(e) => setMessagesContent(e.target.value)}
            placeholder="send"
          />
          <button
            className="bg-green-300 h-[100%] w-[5rem]  "
            onClick={SendMessage}
          >
            Send
          </button>
        </div>
      </div>
    )
  } else {
    return <div>NO </div>
  }
}

export default Chat
